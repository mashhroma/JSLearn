// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

let tempCelsius = 9;
let tempFahrenheit = (9 / 5) * tempCelsius + 32;

console.log(`температура в градусах Цельсия равна ${tempCelsius}
температура в градусах Фаренгейта равна ${tempFahrenheit}`);

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

const userName = "Maria";
let admin = userName;
console.log(admin);