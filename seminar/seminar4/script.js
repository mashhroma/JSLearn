// Задание 1(тайминг 20 минут) Текст задания 
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов. 
console.log('Задание 1.1');
const arr1_1 = [1, 2, 3];
arr1_1.forEach(element => {
    console.log(element);
});

// 2. Создайте массив с произвольными элементами.Выведите на экран количество элементов в этом массиве. 
console.log('Задание 1.2');
const arr1_2 = [1, 3, 6, 8, 0, 6];
console.log(arr1_2.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'.Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
console.log('Задание 1.3');
const arr1_3 = ['a', 'b', 'c'];
arr1_3[0] = 1;
arr1_3[1] = 2;
arr1_3[2] = 3;
console.log(arr1_3);

// Задание 2(тайминг 15 минут)
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора++ увеличьте каждый элемент массива на единицу.
console.log('Задание 2.1');
const arr2_1 = [1, 2, 3];
for (let i = 0; i < arr2_1.length; i++) {
    arr2_1[i]++;
}
arr2_1.forEach(element => {
    console.log(element);
});

// 2. Узнайте длину следующего массива: const arr = []; arr[3] = 'a'; arr[8] = 'b';
console.log('Задание 2.2');
const arr2_2 = [];
arr2_2[3] = 'a';
arr2_2[8] = 'b';
console.log(arr2_2.length);

// 3. Пусть дан такой массив: const arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5.
console.log('Задание 2.3');
const arr2_3 = [1, 2, 3];
arr2_3.push(4, 5);
console.log(arr2_3);

// 4. Создайте произвольный массив из 5 элементов, Удалите из него два элемента.Проверьте, какое станет значение свойства length после этого
console.log('Задание 2.4');
const arr2_4 = [1, 3, 6, 8, 5];
arr2_4.pop();
arr2_4.pop();
console.log(arr2_4.length);



// Задание 3(тайминг 25 минут)
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
console.log('Задание 3.1');
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
console.log('Задание 3.2');
for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
console.log('Задание 3.3');
for (let i = 100; i >= 0; --i) {
    console.log(i);
}

// 4. Дано число num с неким начальным значением.Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится ? Посчитайте количество итераций, необходимых для этого.
console.log('Задание 3.4');
let num = 10;
let count = 0;
while (num <= 1000) {
    num *= 3;
    count++;
    console.log('num = ' + num, 'count = ' + count);
}



// Задание 4(тайминг 25 минут)
// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3 - х, но меньше 10.
console.log('Задание 4.1');
const arr4_1 = [2, 5, 9, 15, 1, 4];
arr4_1.forEach(element => {
    if (element > 3 && element < 10) {
        console.log(element);
    }
});

// 2. Найдите сумму четных чисел от 2 до 100.
console.log('Задание 4.2');
result = 0;
for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        result += i;
    }
}
console.log(result);

// 3. Дан массив const =[2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.
console.log('Задание 4.3');
const arr4_3 = [2, 5, 9, 3, 1, 4];
result = 0;
arr4_3.forEach(element => {
    result += element;
});
console.log(result);

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
console.log('Задание 4.4');
let myString = "-";
for (let i = 1; i < 10; i++) {
    myString += i + '-';
}
console.log(myString);

// 5. Дан массив с числами.const = [2, 5, 9, 0, 3, 1, 4];  Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
console.log('Задание 4.5');
const arr4_5 = [2, 5, 9, 0, 3, 1, 4];
for (let i = 0; i < arr4_5.length; i++) {
    if (arr4_5[i] === 0) {
        break;
    } else {
        console.log(arr4_5[i]);
    }
}

// Задание 5(тайминг 25 минут)
// 1. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами.Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
console.log('Задание 5.1');
const arr5_1 = [1, 4, 6, 2, 6, 8, 9, 0, 4, 2];
arr5_1.forEach(element => {
    if (element % 2 === 0) {
        console.log(element ** 2);
    }
    if (element % 3 === 0) {
        console.log(element ** 3);
    }
});

// 2. С помощью двух вложенных циклов выведите на экран следующую строку:
console.log('Задание 5.2');

// 3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]; Подсчитайте количество цифр 3 в этом массиве.
console.log('Задание 5.3');
const arr5_3 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
countOf3 = 0;
arr5_3.forEach(element => {
    if (element === 3) countOf3++;
});
console.log(countOf3);

// 4. Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
console.log('Задание 5.4');
const arr5_4 = [1, 2, 3, 4, 5];
arr5_4.splice(1, 2);
console.log(arr5_4);
