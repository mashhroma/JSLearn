// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
days = {
    1: 'Понедельник',
    'num_2': 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
}
console.log(days.num_2);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
user = {
    'name': 'Maria',
    'surname': 'Savkina',
    'age': 38
};
console.log(`${user.name} - ${user.surname} - ${user.age}`);

// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
user.patronymic = prompt('Введите отчество')
console.log(`${user.name} - ${user.patronymic} - ${user.surname} - ${user.age}`);

// 4. Удалите свойство surname
delete user.surname;
console.log(user);


// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const newDays = {};
for (let i = 0; i < arr1.length; i++) {
    newDays[arr2[i]] = arr1[i];
}
console.log(newDays);

// 2. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.
const obj = { x: 1, y: 2, z: 3 };
for (const key in obj) {
    obj[key] *= obj[key];
}
console.log(obj);

console.log('example 2: ' + Object.values(obj).map(element => element * element));;

// Задание 3 (тайминг 15 минут)
// const obj = {
// key1: {
// key1: 1,
// key2: 2,
// key3: 3,
// },
// key2: {
// key1: 4,
// key2: 5,
// key3: 6,
// },
// key3: {
// key1: 7,
// key2: 8,
// key3: 9,
// },
// }
// Найдите сумму элементов приведенного объекта.
const obj2 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let calc = 0;
for (const key in obj2) {
    for (const k in obj2[key]) {
        calc += obj2[key][k];
    }
}
console.log(calc);

// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
    'question': 'sun',
    'answer': 'sun',
    'askQuestion': function () { (prompt('Ваш ответ') == this.answer) ? console.log('вы выиграли') : console.log('вы проиграли') }
};

riddles.askQuestion();