const express = require('express');
const cors = require('cors');
const path = require('path');
var cookieParser = require('cookie-parser');
const multer = require('multer');
const {connectDatabase} = require('./database/connectionconfigDb');

const app = express();



const api = require('./api');
const { notFound, errorHandler } = require('./middlewares/errors.middleware');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/public'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
	});
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/') // Destination folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Naming file
    }
});

const upload = multer({ storage: storage });

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
	try { 
		const { email, password } = req.body;
		if (!email || !password) {
			res.status(400).json({ message: 'Invalid Request' });
			// stop the execution if the username or password is missing
			return;
		}

		// connect to the database
		database = await connectDatabase();
		// Verify the user and password are correct from the post request
		// verify the user exists in the request
		database.query(`SELECT id,email,firstname,lastname,avatar_path FROM users WHERE email='${email}' AND password='${password}';`)
		.then((result) => {
			// If the user is found, return the user information
			if (result.rows.length > 0) {
				// save the user in the session
				res.cookie('user', JSON.stringify(result.rows), { 
                    maxAge: 3600000, // 1 hour
                    httpOnly: false, // The cookie is accessible via JavaScript 
                    secure: false, // The cookie will be transmitted over HTTP 
                });
				res.status(200).json(result.rows);
			} else {
				res.status(404).json({ message: 'User not found' });
			}
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.post('/signup',upload.single('avatar'), async (req, res) => {
    try {
        // Extract user details from the post request
        const { password, email, firstname, lastname } = req.body;

		// Verify the user and password are correct from the post request
		if (!password || !email || !firstname || !lastname) {
			res.status(400).json({ message: 'Invalid Request' });
			// stop the execution if the username or password is missing
			return;
		}

		// verify if the email has a good syntax
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailRegex.test(email)) {
			res.status(400).json({ message: 'Invalid email syntax' });
			// stop the execution if the email is invalid
			return;
		}

		// Get the file path after uploading
        const avatarPath = req.file ? req.file.path : null;

		// connect to the database
		database = await connectDatabase();
        // insert the user into the database
        database.query(
            `INSERT INTO users (password, email, firstname, lastname, avatar_path) VALUES ('${password}', '${email}', '${firstname}', '${lastname}','${avatarPath}') RETURNING *;`,
        ).then((result) => {
			// check if the user was created
			if (result.rows.length > 0) {
				res.status(200).json({ message: 'User created successfully', user: result.rows[0] });
			} else {
				res.status(500).json({ message: 'Error creating user' });
			}
		});
    } catch (error) {
        console.error(error);

		if (error.code === '23505') {
			return res.status(400).json({ message: 'Email already used' });
		}

        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/addPost', async (req, res) => {
	try {
		const userCookie = req.cookies.user;
		// check if the user is logged in
		if (userCookie) {

			// Extract user details from the post request
			const { title, content } = req.body;
			const user_id = userCookie[0].id;

			// connect to the database
			database = await connectDatabase();
			// insert the post into the database
			const result = await database.query(
				`INSERT INTO posts (user_id, title, content) VALUES ('${user_id}', '${title}', '${content}') RETURNING *;`,
			).then((result) => {
				// check if the user was created
				if (result.rows.length > 0) {
					res.status(200).json({ message: 'Post created successfully', post: result.rows[0] });
				} else {
					res.status(500).json({ message: 'Error creating post' });
				}
			});
		}
		else 
			res.status(401).json({ message: 'You must be logged in to create a post' });
		} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.post('/addComment', async (req, res) => {
	try {
		const userCookie = req.cookies.user;
		// check if the user is logged in
		if (userCookie) {
			// Extract user details from the post request
			const { post_id, content } = req.body;
			const user_id = userCookie[0].id;

			// Verify the user and password are correct from the post request
			if (!post_id || !content) {
				res.status(400).json({ message: 'Invalid Request' });
				// stop the execution if the username or password is missing
				return;
			}

			// connect to the database
			database = await connectDatabase();
			// insert the comment into the database
			const result = await database.query(
				`INSERT INTO comments (user_id, post_id, content) VALUES ('${user_id}', '${post_id}', '${content}') RETURNING *;`,
			).then((result) => {
				// check if the user was created
				if (result.rows.length > 0) {
					res.status(200).json({ message: 'Comment created successfully', comment: result.rows[0] });
				} else {
					res.status(500).json({ message: 'Error creating comment' });
				}
			});
		}
		else 
			res.status(401).json({ message: 'You must be logged in to create a comment' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.get('/getPosts', async (req, res) => {
	try {

		// connect to the database
		database = await connectDatabase();

		const query = `
			SELECT posts.id as id, 
			       users.firstname as firstName,
				   users.lastname as lastName,
			       posts.content,
				   posts.title,
			       posts.DATE as timestamp 
			FROM posts 
			INNER JOIN users on posts.user_id = users.id 
			ORDER BY DATE DESC;
		`;
		
		const result = await database.query(query).then((result) => {
			if (result.rows.length > 0) {
				res.status(200).json({ message: 'Posts retrieved successfully', posts: result.rows });
			} else {
				res.status(404).json({ message: 'No posts found' });
			}
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});


app.get('/getComments', async (req, res) => {
	try {

		// get the parameters from the request
		const { post_id } = req.query;

		// connect to the database
		database = await connectDatabase();
		// get the comments of the post from the database
		const result = await database.query(
			`SELECT * FROM comments WHERE post_id='${post_id}';`,
		).then((result) => {
			// check if the user was created
			if (result.rows.length > 0) {
				res.status(200).json({ message: 'Comments retrieved successfully', comments: result.rows });
			} else {
				res.status(500).json({ message: 'Error retrieving comments' });
			}
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});
	
app.post('/likePost', async (req, res) => {
	try {
		const userCookie = req.cookies.user;
	  // Check if the user is logged in
	  if (userCookie) {
		// Extract user details from the post request
		const { post_id } = req.body;
		const user_id = userCookie[0].id;


		// Verify the user and post IDs are provided
		if (!post_id) {
		  return res.status(400).json({ message: 'Invalid Request' });
		}
		// connect to the database
		database = await connectDatabase();
		// Insert the like into the database without using parameterized query
		const result = await database.query(
		  `INSERT INTO Likes (user_id, post_id) VALUES ('${user_id}', '${post_id}') RETURNING *;`
		);
  
		// Check if the like was created
		if (result.rows.length > 0) {
		  return res.status(200).json({ message: 'Like created successfully', like: result.rows[0] });
		} else {
		  return res.status(500).json({ message: 'Error creating like' });
		}
	  } else {
		return res.status(401).json({ message: 'You must be logged in to create a like' });
	  }
	} catch (error) {
	  console.error(error);
  
	  // Check if error is due to a unique constraint violation
	  if (error.code === '23505') {
		return res.status(400).json({ message: 'User already liked this post' });
	  }
  
	  return res.status(500).json({ message: 'Internal Server Error' });
	}
  });
				

  app.post('/logout', (req, res) => {
    // Clear the user cookie; the name 'user' should match the name used when the cookie was set in the login route.
    res.clearCookie('user'); 
    // Sending a successful response. In a real-world scenario, additional cleanup or checks might be necessary.
    res.status(200).json({ message: 'Logged out successfully' });
});

app.get('/currentuser', (req, res) => {
    // Attempt to retrieve the user data from the cookie instead of the session.
    // This is insecure because user data is exposed, and cookies can be manipulated on the client-side.
    const userCookie = req.cookies.user;

    if (userCookie) {
        let user;
        try {
            user = JSON.parse(userCookie);
            res.status(200).json({ user: user });
        } catch (err) {
            console.error("Error parsing user data", err);
            res.status(400).json({ message: 'Bad Request - Invalid Cookie Data' });
        }
    } else {
        // No cookie means that the user is not authenticated.
        res.status(401).json({ message: 'Unauthorized' });
    }
});
	 

app.use('/api/v1', api);
app.use(notFound);
app.use(errorHandler); 

module.exports = app;
