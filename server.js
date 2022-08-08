const express = require('express');
const path = require('path');
const connection = require('./config/config.js');


const app = express();
const PORT = 4545;

app.use(express.urlencoded({ extended: false }));

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connection has been established to the database!');
})





app.get('/', (req, res) => {
    console.log('Accessing landing page of the app');
    res.json('This is the landing page')
});

app.listen(PORT, () => {
    console.log(`Server has started on the port ${ PORT }`);
});