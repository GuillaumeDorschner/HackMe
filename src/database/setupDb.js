const { Client } = require('pg');
require('dotenv').config();

const connectDatabase = async () => {
    // Create a client for database creation
    const rootClient = new Client({
        host: process.env.HOST_DATABASE,
        port: process.env.PORT_DATABASE,
        user: process.env.USER_DATABASE,
        password: process.env.PASSWORD_DATABASE, 
        database: process.env.DATABASE
    });
    await rootClient.connect();
    return rootClient;
}

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
    .then(() => console.log('Database created successfully'))
    .catch(err => console.error('Error creating database:', err));

  await rootClient.end();

  // Create a client for the new database
  const client = await connectDatabase();

  // drop all tables
  // await client.query('DROP TABLE users, posts, comments;');

  // Create tables
  const createUsersTable = ` CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL
    avatar_path VARCHAR(255) NOT NULL,
  );`;
  const createPostsTable = `CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
  const createCommentsTable = `CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id),
    DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
  const createLikes = `CREATE TABLE Likes (
      LikeID SERIAL PRIMARY KEY,
      PostID INTEGER REFERENCES posts(id),
      CommentID INTEGER REFERENCES comments(id),
      UserID INTEGER REFERENCES users(id),
      CreatedAt TIMESTAMP DEFAULT current_timestamp,
      UNIQUE(UserID, PostID,CommentID)
  );`;

  await client.query(createUsersTable);
  await client.query(createPostsTable);
  await client.query(createCommentsTable); 
  await client.query(createLikes);
  
  await client.end();
};


module.exports = {
    connectDatabase,
    createDatabase
};