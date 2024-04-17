const menuEl = document.querySelector('.menu');

menuEl.addEventListener('click', ({ target }) => {
    if (target.closest('.menu__link')) {
        // const menuEls = document.querySelectorAll('.menu__link');
        document.querySelectorAll('.menu__link').forEach((element) => {
            element.classList.remove('active');
        });

        target.classList.add('active');
    }
});