import { deleteReview, reviews } from "./storage.js";

const contentEl = document.querySelector('.content');

contentEl.addEventListener('click', function ({ target }) {
    if (target.className === 'reviews__heading') {
        target.textContent = target.parentElement.open ? 'показать отзывы' : 'скрыть отзывы';
    }

    if (target.closest('.reviews__delete')) {
        deleteReview(target.dataset.name, target.previousElementSibling.textContent);
        if (target.parentElement.previousElementSibling || target.parentElement.nextElementSibling) {
            target.parentElement.remove();
        } else {
            target.parentElement.parentElement.parentElement.parentElement.remove();
        }
    }
});

contentEl.innerHTML = reviews.map(review => {
    const productName = review.product;
    let allReviews = review.productReviews.map(productReview => {
        return `
        <li class="reviews__item">
            <span class="reviews__text">${productReview}</span>
            <button class="reviews__delete"  data-name="${productName}">удалить</button>
        </li>`;
    }).join('');
    return `
        <div class="product">
            <h3 class="product__name">${productName}</h3>
            <details class="reviews">
                <summary class="reviews__heading">показать отзывы</summary>
                <ul class="reviews__list">
                    ${allReviews}
                </ul>
            </details>
        </div>
    `;
}).join('');
