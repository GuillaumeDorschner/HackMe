const { Client } = require('pg');
require('dotenv').config();

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

// export default connectDatabase;
module.exports = {connectDatabase}; 