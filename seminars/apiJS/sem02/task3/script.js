const btnEl = document.querySelector('.btn');
btnEl.addEventListener('click', () => {
    btnEl.textContent = 'Товар добавлен в корзину';
    btnEl.disabled = true;
    setTimeout(() => {
        btnEl.textContent = 'Купить';
        btnEl.disabled = false;
    }, 2000);
});