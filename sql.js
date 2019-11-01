const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'spooky_db',
    connectionLimit: 2
});

connection.execute(
    'SELECT * FROM `scores`',
    function (err, id) {
        console.log(id);
        process.exit()
    }
);

