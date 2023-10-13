const { Client } = require('pg');
require('dotenv').config();

const resetDatabase = async () => {
    // Create a client for database deletion
    const rootClient = new Client({
        host: process.env.HOST_DATABASE,
        port: process.env.PORT_DATABASE,
        user: process.env.USER_DATABASE,
        password: process.env.PASSWORD_DATABASE,
        // Connect to the main database when deleting the hackme database
        database: process.env.BIG_DATABASE
    });
    await rootClient.connect();

    // Drop the hackme database
    await rootClient.query(`DROP DATABASE IF EXISTS hackme;`)
        .then(() => console.log('Database deleted successfully'))
        .catch(err => console.error('Error deleting database:', err));

    await rootClient.end();
};

resetDatabase();
