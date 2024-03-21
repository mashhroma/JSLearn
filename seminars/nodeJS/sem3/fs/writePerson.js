const fs = require('fs');
const path = require('path');

const data = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 30,
    city: 'Moscow'
};

const jsonPath = path.join(__dirname, 'person.json');

fs.writeFile(jsonPath, JSON.stringify(data), (err) => {
    if (err) {
        console.error(err);
    }
    console.log('The file was saved.');
});