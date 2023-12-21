// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
console.log('Задание 1');
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + ' – это ноль');
    }
    else if (i % 2 === 0) {
        console.log(i + ' – четное число');
    } else {
        console.log(i + ' – нечетное число');
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
console.log('Задание 2');
const arrayTask2 = [1, 2, 3, 4, 5, 6, 7];
arrayTask2.splice(3, 2);
console.log(arrayTask2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
console.log('Задание 3');
const arrayTask3 = [];
let sumOfElements = 0;
let minElement = 0;
let isContainsThree = false;

for (let i = 0; i < 5; i++) {
    arrayTask3.push(Math.floor(Math.random() * 10));
    sumOfElements += arrayTask3[i];
    if (i === 0) {
        minElement = arrayTask3[i];
    }
    if (minElement > arrayTask3[i]) {
        minElement = arrayTask3[i];
    }
    if (arrayTask3[i] === 3) {
        isContainsThree = true;
    }
}
console.log(`Array: ${arrayTask3}
Sum of elements = ${sumOfElements}
Min element = ${minElement}
Is Contains number 3: ${(isContainsThree) ? 'Yes' : 'No'}`);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
console.log('Необязательное задание');
let xSlide = '';
for (let i = 0; i < 20; i++) {
    console.log(xSlide += 'x');
}