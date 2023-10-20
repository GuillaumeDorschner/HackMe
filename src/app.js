const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const multer = require('multer');
require('dotenv').config();


const { Client } = require('pg');

const connectDatabase = async () => {
  // Read configuration from environment variables
  const dbHost = process.env.HOST_DATABASE || 'localhost';
  const dbPort = process.env.PORT_DATABASE || 5432;
  const dbUser = process.env.USER_DATABASE || 'root';
  const dbPassword = process.env.PASSWORD_DATABASE || 'rootpassword';
  const dbName = process.env.DATABASE || 'my_database';

  // Create a client for database connection
  const rootClient = new Client({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName
  });

  try {
	await rootClient.connect();
	console.log('Connected to the database successfully!');
	return rootClient;
} catch (err) {
	console.error('Failed to connect to the database:', err);
	return null;
}
};

// Call the function to connect to the database
connectDatabase();




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

app.use(session({
    secret: 'your_secret_key',  // Use a secret key from environment variables in production
    resave: false,  // Forces the session to be saved back to the session store
    saveUninitialized: false,  // Forces a session that is "uninitialized" to be saved to the store
    rolling: true,  // Force a cookie to be set on every response, resetting the expiration date
    cookie: {
        secure: false,  // Use true in production with HTTPS
        maxAge: 3600000  // 1 hour of inactivity
    }
}));

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
		// connecting to the database
		database = await connectDatabase();
		// Verify the user and password are correct from the post request
		// verify the user exists in the request
		database.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}';`)
		.then((result) => {
			// If the user is found, return the user information
			if (result.rows.length > 0) {
				// save the user in the session
				req.session.user = result.rows[0];
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
        // connecting to the database
        const database = await connectDatabase();

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
		console.log(avatarPath);

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
		// check if the user is logged in
		if (req.session.user) {
			// connecting to the database
			const database = await connectDatabase();

			// Extract user details from the post request
			const { user_id, title, content } = req.body;


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
		// check if the user is logged in
		if (req.session.user) {
			// connecting to the database
			const database = await connectDatabase();

			
			// Extract user details from the post request
			const { user_id, post_id, content } = req.body;

			// Verify the user and password are correct from the post request
			if (!user_id || !post_id || !content) {
				res.status(400).json({ message: 'Invalid Request' });
				// stop the execution if the username or password is missing
				return;
			}

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
		const database = await connectDatabase();

		const result = await database.query(
			`SELECT * FROM posts ORDER BY DATE DESC;`,
		).then((result) => {
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
		// connecting to the database
		const database = await connectDatabase();

		// get the parameters from the request
		const { post_id } = req.query;

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
	  // Check if the user is logged in
	  if (req.session.user) {
		// Extract user details from the post request
		const { user_id, post_id } = req.body;
  
		// Verify the user and post IDs are provided
		if (!user_id || !post_id) {
		  return res.status(400).json({ message: 'Invalid Request' });
		}
  
		// Connect to the database
		const database = await connectDatabase();
  
		// Insert the like into the database without using parameterized query
		const result = await database.query(
		  `INSERT INTO Likes (UserID, PostID) VALUES ('${user_id}', '${post_id}') RETURNING *;`
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
			


app.post('/likeComment', async (req, res) => {
	try {
	  // Check if the user is logged in
	  if (req.session.user) {
		// Extract user details from the post request
		const { user_id, comment_id } = req.body;
  
		// Verify the user and comment IDs are provided
		if (!user_id || !comment_id) {
		  return res.status(400).json({ message: 'Invalid Request' });
		}
  
		// Connect to the database
		const database = await connectDatabase();
  
		// Insert the like into the database without using parameterized query
		const result = await database.query(
		  `INSERT INTO Likes (UserID, CommentID) VALUES ('${user_id}', '${comment_id}') RETURNING *;`
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
		return res.status(400).json({ message: 'User already liked this comment' });
	  }
  
	  return res.status(500).json({ message: 'Internal Server Error' });
	}
  });
				

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.status(200).json({ message: 'Logged out successfully' });
    });
});

app.get('/current_user', (req, res) => {
	if (req.session.user) 
		res.status(200).json({ user: req.session.user });
	else
		res.status(401).json({ message: 'Unauthorized' });
});
	 

app.use('/api/v1', api);
app.use(notFound);
app.use(errorHandler); 

module.exports = app;
