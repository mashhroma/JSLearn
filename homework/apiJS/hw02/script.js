// Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

// Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Контейнер для отображения текущего изображения.
// b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
// c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

// Для создания элементов интерфейса используйте HTML.
// При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
// При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
// При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

// Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

// Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

function getBigPicture(images, index) {
    pictureEL.innerHTML = `
    <img class="big-img" src="${images[index].url}" data-id="${images[index].id}">
    `;
}

let picsCount = 0;
const pics = [
    {
        id: ++picsCount,
        url: 'https://klike.net/uploads/posts/2023-01/1675059293_3-32.jpg'
    },
    {
        id: ++picsCount,
        url: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-41.jpg'
    },
    {
        id: ++picsCount,
        url: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-16.jpg'
    },
    {
        id: ++picsCount,
        url: 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695792586_gas-kvas-com-p-kartinki-kotiki-26.jpg'
    },
    {
        id: ++picsCount,
        url: 'https://w-dog.ru/wallpapers/5/16/346496632753833/kot-koshak-kotyara-lezhit-vzglyad-usy-smotrit-glaza.jpg'
    },
    {
        id: ++picsCount,
        url: 'http://funik.ru/wp-content/uploads/2018/10/cd7412da1e03af2ad39e.jpg'
    },
    {
        id: ++picsCount,
        url: 'http://tapeciarnia.pl/tapety/normalne/130115_dwa_kotki_skrzynia.jpg'
    },
    {
        id: ++picsCount,
        url: 'https://w-dog.ru/wallpapers/5/16/346496632753833/kot-koshak-kotyara-lezhit-vzglyad-usy-smotrit-glaza.jpg'
    },
    {
        id: ++picsCount,
        url: 'https://haipovo.ru/wp-content/uploads/2021/06/39.jpg'
    },
    {
        id: ++picsCount,
        url: 'https://on-desktop.com/wps/Animals___Cats__Gray_fluffy_cat_licked_046843_.jpg'
    }
];

const containerEl = document.querySelector('.container');
const pictureEL = document.querySelector('.picture');
const prevButtonEl = document.querySelector('.prev');
const nextButtonEl = document.querySelector('.next');
const pointsEl = document.querySelector('.points');

getBigPicture(pics, 0);

pointsEl.innerHTML = pics.map(pic => `<img class="small-img" data-id="${pic.id}" src="${pic.url}">`).join('');

prevButtonEl.addEventListener('click', function () {
    const index = pics.findIndex(pic => pic.id === +pictureEL.querySelector('.big-img').dataset.id)
    const nextIndex = (index === 0) ? pics.length - 1 : index - 1;
    getBigPicture(pics, nextIndex);
});

nextButtonEl.addEventListener('click', function () {
    const index = pics.findIndex(pic => pic.id === +pictureEL.querySelector('.big-img').dataset.id)
    const nextIndex = (index === pics.length - 1) ? 0 : index + 1;
    getBigPicture(pics, nextIndex);
});

pointsEl.addEventListener('click', function ({ target }) {
    const index = pics.findIndex(pic => pic.id === +target.dataset.id)
    getBigPicture(pics, index);
});
