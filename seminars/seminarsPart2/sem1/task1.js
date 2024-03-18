// Задание 1
// 1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
const linkBlock = document.querySelector('p');
console.log(linkBlock);

// 2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>
const linkWww = document.querySelector('.www');
console.log(linkWww);



// Задание 2
// 1. Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
const linkDev = document.querySelector('.link');
linkDev.textContent = 'link text js';
linkDev.href = 'https://developer.mozilla.org/ru/';

// 2. Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
const linkImg = document.querySelector('.photo');
linkImg.src = 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/10/20/image-862209192214338119696.gif';

// Задание 3
// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел 
const paragraphEl = document.createElement('p');
paragraphEl.textContent = 'Новый текстовый элемент';

const divEl = document.querySelector('.content');
divEl.appendChild(paragraphEl);



// Задание 4
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
let count = 0;
const button = document.createElement('button');
button.textContent = 'button';
divEl.appendChild(button);

button.onclick = function () {
    console.log(++count);
};



// Задание 5
// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
const buttonSend = document.createElement('button');
buttonSend.textContent = 'Отправить';
divEl.append(buttonSend);
buttonSend.onclick = () => buttonSend.textContent = 'Текст отправлен';
