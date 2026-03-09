const mysql = require('mysql2');

const pool = mysql.createPool({
    hot:'localhost',
    user:'root',
    database:'sites',
    password:'',
});

module.exports = pool.promise();