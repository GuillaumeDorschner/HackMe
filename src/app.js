const express = require('express');
const cors = require('cors');
const path = require('path');
const { Client } = require('pg');

const connectDatabase = async () => {
	// Create a client for database creation
	const rootClient = new Client({
	  host: 'localhost',
	  port: 5432,
	  user: "postgres",
	  password: "your_password",
	  database: 'hackme'
	});

    rootClient.connect();
	return rootClient;
}

const app = express();

const api = require('./api');
const { notFound, errorHandler } = require('./middlewares/errors.middleware');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/public'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
	});
}

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

app.post('/signup', async (req, res) => {
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

        // insert the user into the database
        const result = await database.query(
            `INSERT INTO users (password, email, firstname, lastname) VALUES ('${password}', '${email}', '${firstname}', '${lastname}') RETURNING *;`,
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
		// connecting to the database
		const database = await connectDatabase();

		// Extract user details from the post request
		const { email, title, content } = req.body;

		// getting the user id from the database
		const user_id = await database.query(
			`SELECT id FROM users WHERE email='${email}';`,
		);

		// insert the post into the database
		const result = await database.query(
			`INSERT INTO posts (user_id, title, content) VALUES ('${email}', '${title}', '${content}') RETURNING *;`,
		).then((result) => {
			// check if the user was created
			if (result.rows.length > 0) {
				res.status(200).json({ message: 'Post created successfully', post: result.rows[0] });
			} else {
				res.status(500).json({ message: 'Error creating post' });
			}
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.post('/addComment', async (req, res) => {
	try {
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
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.get('/getPosts', async (req, res) => {
	try {
		// connecting to the database
		const database = await connectDatabase();

		// Use parameterized query to prevent SQL injection
		const result = await database.query(
			`SELECT * FROM posts;`,
		).then((result) => {
			// check if the user was created
			if (result.rows.length > 0) {
				res.status(200).json({ message: 'Posts retrieved successfully', posts: result.rows });
			} else {
				res.status(500).json({ message: 'Error retrieving posts' });
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
	
app.get('/likePost', async (req, res) => {
	try {
		// connecting to the database
		const database = await connectDatabase();

		// get the parameters from the request
		const { post_id } = req.query;

		// get the comments of the post from the database
		const result = await database.query(
			`UPDATE posts SET likes = likes + 1 WHERE id='${post_id}' RETURNING *;`,
		).then((result) => {
			// check if the user was created
			if (result.rows.length > 0) {
				res.status(200).json({ message: 'Post liked successfully', post: result.rows[0] });
			} else {
				res.status(500).json({ message: 'Error liking post' });
			}
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.get('/likeComment', async (req, res) => {
	try {
		// connecting to the database
		const database = await connectDatabase();

		// get the parameters from the request
		const { comment_id } = req.query;

		// get the comments of the post from the database
		const result = await database.query(
			`UPDATE comments SET likes = likes + 1 WHERE id='${comment_id}' RETURNING *;`,
		).then((result) => {
			// check if the user was created
			if (result.rows.length > 0) {
				res.status(200).json({ message: 'Comment liked successfully', comment: result.rows[0] });
			} else {
				res.status(500).json({ message: 'Error liking comment' });
			}
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
});

app.use('/api/v1', api);
app.use(notFound);
app.use(errorHandler); 

module.exports = app;
