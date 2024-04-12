'use strict';

/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
```
<input class="number-input" type="text"  placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const inputEl = document.querySelector('.number-input');

const buttonEl = document.querySelector('.check-button');

const messageEl = document.querySelector('.message');

// buttonEl.addEventListener('click', () => {
//     if (Number.isFinite(+inputEl.value) && inputEl.value !== '') {
//         messageEl.textContent = 'Число';
//     } else {
//         messageEl.textContent = 'Число не число';
//     }
// });

buttonEl.addEventListener('click', () => {
    try {
        if (!Number.isFinite(+inputEl.value) || inputEl.value === '') {
            throw new Error('Не число');
        }
        messageEl.textContent = 'Число';
    } catch (error) {
        messageEl.textContent = error.message;
    }
});