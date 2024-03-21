const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

const jsonPath = path.join(__dirname, 'pages.json');
const pages = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const links = pages.map((page) => page.url);

pages.forEach(page => {
    app.get(page.url, (req, res) => {
        let menu = '';
        links.forEach(link => {
            if (link !== page.url)
                menu += `<a href='${link}'>Ссылка на страницу ${link}</a>`;
        });

        page.views++;

        res.send(`
        <h1>${page.title}</h1>
        <p>Просмотров: ${page.views}</p>
        ${menu}
        `);

        fs.writeFileSync(jsonPath, JSON.stringify(pages));
    });
});

app.listen(3000, () => {
    console.log('Сервер запущен');
});