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
};

// export default connectDatabase;
module.exports = {connectDatabase}; 