import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'killjoy',
    database: 'test',
});