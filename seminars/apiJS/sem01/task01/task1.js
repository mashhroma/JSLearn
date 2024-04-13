// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.
// 2. При закрытии страницы (вкладки), необходимо выводить
// всплывающее окно или диалоговое окно браузера и
// спросить, уверен ли пользователь, что хочет покинуть
// страницу?
// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

// Размер окна
// console.log(window.innerHeight + ' ' + window.innerWidth);

// //Размер видимой области (без скрола)
// console.log(document.documentElement.clientHeight + ' ' + document.documentElement.clientWidth);

// //Размер, который может занять браузер
// console.log(screen.availHeight + ' ' + screen.availWidth);

// const sizeEl = document.querySelector('.size');
// printSize();
// window.addEventListener('resize', function (e) {
//     printSize();
// });

// function printSize() {
//         sizeEl.textContent = `${window.innerWidth} x ${window.innerHeight}`;

// }


// window.addEventListener('beforeunload', function (e) { 

//     if (!confirm('Вы уверены?')) {
//         e.preventDefault();
//         console.log('не закрываем');
//     } else {
//         console.log('закрываем');
//     }
// });

window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
    return 'Вы уверены, что хотите покинуть эту страницу?';
});

history.back();
history.forward();