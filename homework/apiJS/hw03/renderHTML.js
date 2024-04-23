const loginFormEl = document.querySelector('.login__form');
const userFormEl = document.querySelector('.user__form');
const pictureEl = document.querySelector('.picture');
const pictureAuthorEl = document.querySelector('.picture__author');
const pushLikeEl = document.querySelector('.fi');
const totalLikesEl = document.querySelector('.total-likes');
const descriptionEl = document.querySelector('.description');
const navigationEl = document.querySelector('.navigation');
const pointsEl = document.querySelector('.points');

function renderLogOutFormVisibility(activeUser) {
    if (activeUser) {
        loginFormEl.style.display = 'none';
        userFormEl
            .insertAdjacentHTML(
                'beforeend',
                `<span class='logout'>Привет, ${activeUser}<button class="logout__button button">Выйти</button></span>`
            );
    }
    if (!activeUser) {
        loginFormEl.style.removeProperty('display');
        userFormEl
            .querySelector('.logout')?.remove();
    }
}

function renderDescription(activeUser) {
    descriptionEl.innerHTML = activeUser ? '<span class="history">Просмотренные фото</span><span class="random">Рандомное фото</span>' : 'Чтобы поставить лайк необходимо авторизоваться'
}

function renderPictureOnPage(pictId, pictAlt, pictUrl, pictAuthor, hasLike, totalLikes) {
    pictureEl.dataset.id = pictId;
    pictureEl.alt = pictAlt;
    pictureEl.src = pictUrl;
    pictureAuthorEl.textContent = `Автор: ${pictAuthor}`;

    switchClassToLike(hasLike);
    renderTotalLikesInfo(totalLikes);
}

function renderTotalLikesInfo(totalLikes) {
    totalLikesEl.textContent = `Нравится: ${totalLikes}`
}

function renderPicturesPoints(pics) {
    pointsEl.innerHTML = pics.map(pic => `<img class="small-img" data-id="${pic.id}" src="${pic.url}">`).join('');
}

function renderNavigationButtons() {
    navigationEl.innerHTML = '<button class="prev nav">Назад</button><button class="next nav">Вперед</button>';
}

function switchClassToLike(hasLike) {
    if (hasLike) {
        pushLikeEl.className = 'fi fi-sr-heart';
    } else {
        pushLikeEl.className = 'fi fi-rr-heart';
    }
}

export { renderLogOutFormVisibility, renderDescription, renderPictureOnPage, renderPicturesPoints, renderNavigationButtons, renderTotalLikesInfo, switchClassToLike, loginFormEl, userFormEl, descriptionEl, pushLikeEl, pictureEl, pointsEl, navigationEl }
