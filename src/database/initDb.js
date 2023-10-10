const {createDatabase} = require('./setupDb');

createDatabase().catch(err => console.error(err));