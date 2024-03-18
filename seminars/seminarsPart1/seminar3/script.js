// Задание 1 (тайминг 20 минут) Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
function getGreeting(userName, userLastName, age) {
    alert(`Привет ${userName} ${userName} с возрастом ${age}`);
}
getGreeting('Иван', 'Петров', 17);

// 2. Создайте функцию которая возводит переданное число в квадрат
const getSquare = (number) => {
    return number * number;
}

// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
function checkNumber(num) {
    if (num >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}



// Задание 2 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
const sum = (num1, num2, num3) => {
    console.log(num1 + num2 + num3);
}

// 2. С помощью созданной вами функции выведите в консоль сумму значений этих переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
let param1 = 1;
let param2 = 2;
let param3 = 3;
sum(param1, param2, param3);

// 3. Дана функция
// function func(num = 5) {
//     console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();
function func(num = 5) {
    console.log(num * num);
}
func(2); // 4
func(3); // 9
func();  // 25

// Задание 3 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
const sqrtNum = (num) => num ** 1 / 2;
console.log(sqrtNum(3) + sqrtNum(4));

// 2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
// const findMin = (num1, num2) => {
//     (num1 < num2) ? return num1 : return num2;
// }

const findMin2 = (num1, num2) => {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}



// Задание 4 (тайминг 25 минут)
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
const getWeekDay = (num) => {
    switch (num) {
        case 1:
            return 'Понедельник';
            break;
        case 2:
            return 'Вторник';
            break;
        case 3:
            return 'Среда';
            break;
        case 4:
            return 'Четверг';
            break;
        case 5:
            return 'Пятница';
            break;
        case 6:
            return 'Суббота';
            break;
        case 7:
            return 'Воскресенье';
            break;
        default:
            return 'Нет';
            break;
    }
}

// 2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)
const greeting = (userName, time) => {
    switch (time) {
        case 1:
            return `Доброе утро ${userName}`;
            break;
        case 2:
            return `Доброе день ${userName}`;
            break;
        case 3:
            return `Доброе вечер ${userName}`;
            break;
        case 4:
            return `Доброе ночи ${userName}`;
            break;
        default:
            break;
    }
}
