const express = require('express');

const app = express();

app.use('/', function helloWorld (req, res) {
    res.send('Hello, World!');
});

app.listen(3000);

console.log('Server running at http://localhost:3000/');

module.exports = app