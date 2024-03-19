const express = require('express');
const { engine } = require('express-handlebars');

const articles = [
    { title: 'Article 1', description: 'First awesome article.' },
    { title: 'Article 2', description: 'Second awesome article.' },
    { title: 'Article 3', description: 'Third awesome article.' }
];

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', (req, res) => {
    res.render('home', { title: 'Home', articles });
});

const port = 3000;

app.listen(port, () => {
    console.log('Сервер запущен');
});