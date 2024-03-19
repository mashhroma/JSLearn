// console.log(process.version);
// console.log(process.arch);
// console.log(process.pid);
// console.log(process.cwd());

// console.log(__dirname);
// console.log(__filename);

const { error } = require('console');
const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

fs.writeFile('text.txt', 'console.log("Hello!")', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('The file was saved.');
});

fs.appendFile(__filename, '\nconsole.log("Hello!")', (err) => {
    if (err) {
        console.error(err);
    }
    console.log('The file was saved.');
});

// writeFile - для перезаписи файла
// appendFile - для добавления данных в файл
console.log("Hello!")