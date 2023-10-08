const { Client } = require('pg');
//require('dotenv').config();

const createDatabase = async () => {
  // Create a client for database creation
  const rootClient = new Client({
    host: 'localhost',
    port: 5432,
    user: "postgres",
    password: "your_password",
    database: 'postgres' // default database
  });

  await rootClient.connect();

  const databaseName = 'hackme';

  // Create the database
  await rootClient.query(`CREATE DATABASE ${databaseName};`)
    .then(() => console.log('Database created successfully'))
    .catch(err => console.error('Error creating database:', err));

  await rootClient.end();

  // Create a client for the new database
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'your_password',
    database: databaseName
  });

  await client.connect();

  // drop all tables
  // await client.query('DROP TABLE users, posts, comments;');

  // Create tables
   const createUsersTable = ` CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL
);`;
  const createPostsTable = `CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    likes INTEGER NOT NULL DEFAULT 0,
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

  await client.query(createUsersTable);
  await client.query(createPostsTable);
  await client.query(createCommentsTable); 
  
  

  await client.end();
};

createDatabase().catch(err => console.error(err));