const btnEl = document.querySelector('.btn');
const modalEl = document.querySelector('.modal');

btnEl.addEventListener('click', () => {
    modalEl.classList.add('active');
});

const closeEl = document.querySelector('.close');
closeEl.addEventListener('click', () => {
    modalEl.classList.remove('active');
});