const http = require('http');

const root = '/';
const about = '/about';
let loadRootCounter = 0;
let loadAboutCounter = 0;

const server = http.createServer((req, res) => {

    if (req.url === root) {
        loadRootCounter++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
        <h1>Корневая страница</h1>
        <p>Просмотров: ${loadRootCounter}</p>
        <a href='${about}'>Ссылка на страницу ${about}</a>
        `);
    } else if (req.url === about) {
        loadAboutCounter++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
        <h1>Страница about</h1>
        <p>Просмотров: ${loadAboutCounter}</p>
        <a href='${root}'>Ссылка на страницу ${root}</a>
        `);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`
        <h1>Страница не найдена!</h1>
        <a href='${root}'>Ссылка на страницу ${root}</a>
        `);
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен');
});