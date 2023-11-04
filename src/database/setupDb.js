const { connectDatabase } = require('./connectionconfigDb');
const { Client } = require('pg');
require('dotenv').config();


const createDatabase = async () => {
  

    // Create a client for database creation
    const rootClient = new Client({
        host: process.env.HOST_DATABASE,
        port: process.env.PORT_DATABASE,
        user: process.env.USER_DATABASE,
        password: process.env.PASSWORD_DATABASE, 
        database: process.env.BIG_DATABASE
    });
    await rootClient.connect();


  // Create the database
  await rootClient.query(`CREATE DATABASE hackme;`)
    .catch(err => console.error('Error creating database:', err));

  await rootClient.end();

  // Create a client for the new database
  const client = await connectDatabase();

  // Create tables
  const createUserTable = `CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL
  );`;
  const createPostTable = `CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
  );`;
  const createCommentTable = `CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id)
  );`;
  const createLikeTable = `
  CREATE TABLE likes (
    like_id SERIAL PRIMARY KEY,
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    UNIQUE (user_id, post_id)
  );`;

  await client.query(createUserTable);
  await client.query(createPostTable);
  await client.query(createCommentTable); 
  await client.query(createLikeTable);
  
  await client.end().then(() => console.log('Database created successfully'));
};


createDatabase()
.catch(err => console.error(err));