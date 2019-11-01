const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'spooky_db'
});

connection.execute(
    'SELECT * FROM `scores`',
    function (err, id) {
        console.log(id);
        process.exit()
    }
);

