const reviewsKey = 'reviews';

let data = [];

if (localStorage.getItem(reviewsKey)) {
    data = JSON.parse(localStorage.getItem(reviewsKey))
} else {
    localStorage.setItem(reviewsKey, JSON.stringify(data));
}

function saveLocalStorage() {
    localStorage.setItem(reviewsKey, JSON.stringify(data));
}

function deleteReview(product, review) {
    const index = data.findIndex(good => good.product === product);

    if (data[index].productReviews.length === 1) {
        data.splice(index, 1);
    } else {
        const reviewIndex = data[index].productReviews.findIndex(productReview => productReview === review);
        data[index].productReviews.splice(reviewIndex, 1);
    }
    saveLocalStorage();
}

export { saveLocalStorage, deleteReview, data as reviews }

