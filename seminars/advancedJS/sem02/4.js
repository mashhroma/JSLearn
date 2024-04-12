'use strict';
/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
Создайте HTML-структуру:
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
Необходимо обрабатывать событие добавления элемента в список. Функция, обрабатывающая событие, должна выбрасывать исключение, если длина введенного значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const inputUserEl = document.querySelector('.user-input');
const buttonAddEl = document.querySelector('.add-button');
const messageEl = document.querySelector('.error-message');
const itemListEl = document.querySelector('.item-list');

// buttonAddEl.addEventListener('click', () => {
//     const userInput = inputUserEl.value;
//     if (userInput.length < 3 || userInput.length > 10) {
//         messageEl.textContent = 'Длина введенного значения не соответствует требованиям!';
//     } else {
//         const liEl = document.createElement('li');
//         liEl.textContent = userInput;
//         itemListEl.append(liEl);
//         inputUserEl.value = '';
//         messageEl.textContent = '';
//     }
//     console.log('Попытка добавления элемента завершена!');
// })

buttonAddEl.addEventListener('click', () => {
    try {
        const userInput = inputUserEl.value;
        if (userInput.length < 3 || userInput.length > 10) {
            throw new Error('Длина введенного значения не соответствует требованиям!');
        }
        const liEl = document.createElement('li');
        liEl.textContent = userInput;
        itemListEl.append(liEl);
        inputUserEl.value = '';
        messageEl.textContent = '';
    } catch (error) {
        messageEl.textContent = error.message;
    } finally {
        console.log('Попытка добавления элемента завершена!');
    }
})