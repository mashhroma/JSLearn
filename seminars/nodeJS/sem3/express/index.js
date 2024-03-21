const express = require('express');

const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => {
//     res.send('<h>Home</h><a href="/about">About</a>')
// });

// app.get('/about', (req, res) => {
//     res.send('<h>About</h><a href="/">Home</a>')
// });

app.listen(3000);