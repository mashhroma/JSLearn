"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

function addProduct(item) {
  let reviewsList = '';
  item.reviews.forEach(review => {
    reviewsList += `<li class="reviews_item">${review.text}</li>`
  });

  const productEl = document.createElement('div');
  productEl.className = 'product';
  productEl.id = item.id;
  productEl.innerHTML = `
  <h3 class="product__name">${item.product}</h3>
  <h4 class="reviews__heading">Отзывы</h4>
  <ul class="reviews__list">${reviewsList}</ul>
  <form class="reviews__form">
    <textarea class="reviews__input" type="text" placeholder="Оставить отзыв о товаре..."></textarea>
    <span class="reviews__error"></span>
    <button class="reviews__button">Добавить отзыв</button>
  </form>
  `;

  contentEL.append(productEl);
}

function addReviewToProduct(id, review) {
  const index = initialData.findIndex(product => product.id === id);
  initialData[index].reviews.push(review);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const contentEL = document.querySelector('.content');

initialData.forEach(product => {
  addProduct(product);
});

document.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.className === 'reviews__button') {
    const errorEl = e.target.previousElementSibling;

    const reviewText = e.target.parentElement.firstElementChild.value;

    try {
      if (reviewText.length < 50 || reviewText.length > 500) {
        throw new Error('Отзыв должен быть не менее 50 символов в длину и не более 500.');
      }

      const productId = e.target.parentElement.parentElement.id;
      const reviewObj = { id: uid(), text: reviewText };
      addReviewToProduct(productId, reviewObj);

      const reviewEl = document.createElement('li');
      reviewEl.className = 'reviews_item';
      reviewEl.textContent = reviewText;
      e.target.parentElement.previousElementSibling.append(reviewEl);

      e.target.parentElement.firstElementChild.value = '';

      if (errorEl.textContent) {
        errorEl.textContent = '';
      }
    } catch (error) {
      errorEl.textContent = error.message;
      console.log(error.message);
    }
  }
});
