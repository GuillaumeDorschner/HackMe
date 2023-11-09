const express = require("express");
const cors = require("cors");
const path = require("path");
var cookieParser = require("cookie-parser");
const multer = require("multer");
const { connectDatabase } = require("./database/connectionconfigDb");
const api = require("./api");
const { notFound, errorHandler } = require("./middlewares/errors.middleware");

const app = express();

// ----------------- MIDDLEWARES ----------------- //

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    const allowedOrigin = `${origin}`;
    callback(null, allowedOrigin);
  },
};

app.use(cors(corsOptions));

// ----------------- USERS ----------------- //

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Invalid Request" });
      return;
    }

    const database = await connectDatabase();

    const result = await database.query(
      `SELECT user_id,email,first_name,last_name,avatar FROM users WHERE email='${email}' AND password='${password}';`
    );

    if (result.rows.length > 0) {
      res.cookie("user", JSON.stringify(result.rows[0]), {
        maxAge: 3600000 * 24,
        httpOnly: false,
        secure: false,
      });
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/signup", upload.single("avatar"), async (req, res) => {
  try {
    const { password, email, first_name, last_name } = req.body;

    if (!password || !email || !first_name || !last_name) {
      res.status(400).json({ message: "Invalid Request" });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: "Invalid email syntax" });
      return;
    }

    const database = await connectDatabase();

    const emailCheckResult = await database.query(
      `SELECT email FROM users WHERE email = '${email}';`
    );

    if (emailCheckResult.rows.length > 0) {
      return res.status(400).json({ message: "Email already used" });
    }

    const avatarPath = path.basename(req.file.path);
    console.log(avatarPath);

    const result = await database.query(
      `INSERT INTO users (password, email, first_name, last_name, avatar) VALUES ('${password}', '${email}', '${first_name}', '${last_name}','${avatarPath}') RETURNING *;`
    );

    if (result.rows.length > 0) {
      res.cookie("user", JSON.stringify(result.rows[0]), {
        maxAge: 3600000 * 24,
        httpOnly: false,
        secure: false,
      });
      res
        .status(200)
        .json({ message: "User created successfully", user: result.rows[0] });
    } else {
      res.status(500).json({ message: "Error creating user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/avatar/:id", async (req, res) => {
  try {
    const { id } = req.params;

    res.sendFile(path.join(__dirname, `./uploads/${id}`));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/currentuser", async (req, res) => {
  const userCookie = req.cookies.user;

  if (userCookie) {
    try {
      const user = JSON.parse(userCookie);
      res.status(200).json({ user: user });
    } catch (err) {
      console.error("Error parsing user data", err);
      res.status(400).json({ message: "Bad Request - Invalid Cookie Data" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.post("/updateUser", async (req, res) => {
  try {
    const userCookie = req.cookies.user;

    if (userCookie) {
      const { password, email, first_name, last_name } = req.body;
      const user = JSON.parse(userCookie);
      const user_id = user.user_id;

      if (!user_id || !email || !first_name || !last_name) {
        res.status(400).json({ message: "Invalid Request" });
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({ message: "Invalid email syntax" });
        return;
      }

      const database = await connectDatabase();

      const emailCheckResult = await database.query(
        `SELECT email FROM users WHERE email = $1 AND user_id != $2;`,
        [email, user_id]
      );

      if (emailCheckResult.rows.length > 0) {
        return res.status(400).json({ message: "Email already used" });
      }

      let query = `UPDATE users SET email = $1, first_name = $2, last_name = $3`;
      let values = [email, first_name, last_name];
      let paramIndex = 4;

      if (password) {
        query += `, password = $${paramIndex}`;
        values.push(password);
        paramIndex++;
      }

      query += ` WHERE user_id = $${paramIndex} RETURNING *;`;
      values.push(user_id);

      const result = await database.query(query, values);

      if (result.rows.length > 0) {
        res.cookie("user", JSON.stringify(result.rows[0]), {
          maxAge: 3600000 * 24,
          httpOnly: false,
          secure: false,
        });
        res
          .status(200)
          .json({ message: "User updated successfully", user: result.rows[0] });
      } else {
        res.status(500).json({ message: "Error updating user" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/updateUserAvatar", upload.single("avatar"), async (req, res) => {
  try {
    const userCookie = req.cookies.user;

    if (userCookie) {
      const user = JSON.parse(userCookie);
      const user_id = user.user_id;

      if (!user_id) {
        res.status(400).json({ message: "Invalid Request" });
        return;
      }

      if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
        return;
      }

      const avatarPath = path.basename(req.file.path);
      console.log(avatarPath);

      const database = await connectDatabase();

      const query = {
        text: `UPDATE users SET avatar = $1 WHERE user_id = $2 RETURNING *;`,
        values: [avatarPath, user_id],
      };
      const result = await database.query(query);

      if (result.rows.length > 0) {
        res.cookie("user", JSON.stringify(result.rows[0]), {
          maxAge: 3600000 * 24,
          httpOnly: false,
          secure: false,
        });
        res
          .status(200)
          .json({ message: "User updated successfully", user: result.rows[0] });
      } else {
        res.status(500).json({ message: "Error updating user" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.status(200).json({ message: "Logged out successfully" });
});

// ----------------- POSTS ----------------- //

app.get("/getPosts", async (req, res) => {
  try {
    const userCookie = req.cookies.user;

    if (userCookie) {
      const database = await connectDatabase();

      const query = `
          WITH 
          CommentData AS (
              SELECT 
                  comments.post_id,
                  COALESCE(
                      JSON_AGG(
                          JSON_BUILD_OBJECT(
                              'comment_id', comments.comment_id,
                              'user_id', comments.user_id,
                              'first_name', users.first_name,
                              'last_name', users.last_name,
                              'content', comments.content,
                              'created_at', comments.created_at
                          )
                      ) FILTER (WHERE comments.comment_id IS NOT NULL), 
                      '[]'
                  ) AS comments
              FROM 
                  comments
              LEFT JOIN 
                  users ON comments.user_id = users.user_id
              GROUP BY 
                  comments.post_id
          ),
          LikeData AS (
              SELECT 
                  post_id,
                  COUNT(user_id) AS like_count
              FROM 
                  likes
              GROUP BY 
                  post_id
          )
      SELECT 
          posts.post_id,
          posts.user_id,
          users.first_name,
          users.last_name,
          users.avatar,
          posts.title,
          posts.content,
          posts.created_at,
          COALESCE(CommentData.comments, '[]') AS comments,
          COALESCE(LikeData.like_count, 0) AS like_count
      FROM 
          posts
      INNER JOIN 
          users ON posts.user_id = users.user_id
      LEFT JOIN 
          CommentData ON posts.post_id = CommentData.post_id
      LEFT JOIN 
          LikeData ON posts.post_id = LikeData.post_id
      ORDER BY 
          posts.created_at DESC;
      `;

      const result = await database.query(query);

      if (result.rows.length > 0) {
        res.status(200).json({
          message: "Posts retrieved successfully",
          posts: result.rows,
        });
      } else {
        res.status(404).json({ message: "No posts found" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/write", async (req, res) => {
  try {
    const userCookie = req.cookies.user;

    if (userCookie) {
      const { title, content } = req.body;
      const user = JSON.parse(userCookie);
      const user_id = user.user_id;

      if (!user_id || !title || !content) {
        res.status(400).json({ message: "Invalid Request" });
        return;
      }

      const database = await connectDatabase();

      const query = `
        INSERT INTO posts (user_id, title, content) 
        VALUES ($1, $2, $3) 
        RETURNING *;
      `;

      const values = [user_id, title, content];

      const result = await database.query(query, values);

      if (result.rows.length > 0) {
        res.status(200).json({
          message: "Post created successfully",
          post: result.rows[0],
        });
      } else {
        res.status(500).json({ message: "Error creating post" });
      }
    } else {
      res
        .status(401)
        .json({ message: "You must be logged in to create a post" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/addComment", async (req, res) => {
  try {
    const userCookie = req.cookies.user;

    if (userCookie) {
      const { post_id, content } = req.body;
      const user = JSON.parse(userCookie);
      const user_id = user.user_id;

      if (!post_id || !content) {
        res.status(400).json({ message: "Invalid Request" });
        return;
      }

      const database = await connectDatabase();
      const result = await database.query(
        `INSERT INTO comments (user_id, post_id, content) VALUES ($1, $2, $3) RETURNING *;`,
        [user_id, post_id, content]
      );

      if (result.rows.length > 0) {
        res.status(200).json({
          message: "Comment created successfully",
          comment: result.rows[0],
        });
      } else {
        res.status(500).json({ message: "Error creating comment" });
      }
    } else {
      res
        .status(401)
        .json({ message: "You must be logged in to create a comment" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/likePost", async (req, res) => {
  try {
    const userCookie = req.cookies.user;

    if (userCookie) {
      const { post_id } = req.body;
      const user = JSON.parse(userCookie);
      const user_id = user.user_id;

      if (!post_id) {
        return res.status(400).json({ message: "Invalid Request" });
      }

      const database = await connectDatabase();
      const checkQuery =
        "SELECT * FROM likes WHERE user_id = $1 AND post_id = $2;";
      const checkResult = await database.query(checkQuery, [user_id, post_id]);

      if (checkResult.rows.length > 0) {
        const deleteQuery =
          "DELETE FROM likes WHERE user_id = $1 AND post_id = $2 RETURNING *;";
        const deleteResult = await database.query(deleteQuery, [
          user_id,
          post_id,
        ]);

        return res.status(200).json({
          message: "Like removed successfully",
          like: deleteResult.rows[0],
        });
      } else {
        const insertQuery =
          "INSERT INTO likes (user_id, post_id) VALUES ($1, $2) RETURNING *;";
        const insertResult = await database.query(insertQuery, [
          user_id,
          post_id,
        ]);

        return res.status(200).json({
          message: "Like created successfully",
          like: insertResult.rows[0],
        });
      }
    } else {
      return res
        .status(401)
        .json({ message: "You must be logged in to create a like" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.use("/api/v1", api);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
