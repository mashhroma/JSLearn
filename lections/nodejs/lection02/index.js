const uuid = require('uuid');
const hello = require('./hello.js')

const id = uuid.v4();

console.log(id);

hello.sayHello();