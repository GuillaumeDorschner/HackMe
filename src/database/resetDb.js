const fs = require('fs');
const { Client } = require('pg');

// Create a client for the new database
const client = new Client({
    host: process.env.HOST_DATABASE,
    port: process.env.PORT_DATABASE,
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE, 
    database: process.env.DATABASE
});
  async function resetDb() {
  await client.connect();


    // Remove all images in the /avatar folder
    const avatarFolder = './avatar';
    fs.readdir(avatarFolder, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            fs.unlink(`${avatarFolder}/${file}`, err => {
                if (err) throw err;
            });
        }
    });

    // Remove all values in the database
    const query = 'DELETE FROM table_name';
    await client.query(query);

    await client.end();
}

resetDb();
