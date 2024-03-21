const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'person.json');
const person = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
person.age -= 10;
person.city = 'Ekaterinburg';

fs.writeFileSync(jsonPath, JSON.stringify(person), (err) => {
    if (err) {
        console.error(err);
    }
    console.log('The file was saved.');
}, 2);