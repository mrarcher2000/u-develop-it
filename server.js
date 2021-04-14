const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// -- EXPRESS MIDDLEWARE 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// -- CONNECT TO MYSQL DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Dollarbi11$',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});


db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});


// Default response for Request Not Found
app.use((req, res) => {
    res.status(404).end();
});




// -- START SERVER 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});