import { saveLocalStorage, reviews } from "./storage.js";

const contentEl = document.querySelector('.content');
const productNameEL = document.querySelector('.review__product');
const reviewTextEl = document.querySelector('.review__text');
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener('click', function (e) {
    e.preventDefault();

    const product = productNameEL.value;
    const reviewText = reviewTextEl.value;

    if (product === '' || reviewText === '') {
        alert('Необходимо заполнить все поля.')
    } else {
        if (reviews.some(review => review.product === product)) {
            reviews.find(review => review.product === product)
                .productReviews.push(reviewText);
        } else {
            reviews.push({ product, productReviews: [reviewText] });
        }
        saveLocalStorage();

        contentEl.insertAdjacentHTML('beforeend', '<p>Ваш отзыв успешно добавлен.</p>');
    }
});