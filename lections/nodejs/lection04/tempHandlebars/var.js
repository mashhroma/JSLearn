const handlebars = require('handlebars');

// const template = handlebars.compile('<p>{{someVar}}</p>');
const template = handlebars.compile('{{#if bold}} <b>{{someVar}}</b> {{else}} <p>{{someVar}}</p> {{/if}}');

// const result = template({ someVar: "Hello!" });

console.log(template({ bold: true, someVar: "Hello!" }));
console.log(template({ bold: false, someVar: "Hello!" }));


const items = [
    { name: 'first item', number: 1 },
    { name: 'second item', number: 2 }
];

const eachTemp = handlebars.compile('{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}');

console.log(eachTemp({ items }));