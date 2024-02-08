// alert("Hello script JS!");
function helloName(helloName) {
    console.log(helloName);
}
helloName("Maria");


let age = Number(prompt('How old are you?'));
// function upAge(age) {
//     return age + 5;
// }
// console.log(`From 5 years you are ${upAge(age)}`);
const lvlUpAge = () => age + 5;
console.log(`From 5 years you are ${lvlUpAge}`);


const sum = (param1, param2) => {
    return param1 + param2;
}
console.log(sum(2, 5));


const salary = (money) => {
    money = money * 0.87;
    return money * 0.75;
}
const userMoney = Number(prompt("How many your salary?"));
console.log(salary(`Для расходов можно использовать: ${salary(userMoney)}`));