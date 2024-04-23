import { setActiveUser, getActiveUser, logOutActiveUserInPage } from "./storageActiveUser.js";
import { getLike, getAllPhoto, getIndexPhotoById, pushUser, pushPhoto, pushLike, removeLike } from "./storageUsers.js";
import { getTotalLikes, addLikeToTotal, removeLikeToTotal } from "./storageTotalLikes.js";
import { renderPictureOnPage, renderPicturesPoints, renderDescription, renderNavigationButtons, renderLogOutFormVisibility, renderTotalLikesInfo, switchClassToLike, userFormEl, loginFormEl, descriptionEl, pushLikeEl, pictureEl, pointsEl, navigationEl } from "./renderHTML.js";


function renderPictureByIndex(index) {
    const photos = getAllPhoto(getActiveUser());
    const pictId = photos[index].id;
    const pictAlt = photos[index].alt;
    const pictUrl = photos[index].url;
    const pictAuthor = photos[index].author;
    const hasLike = getLike(photos[index].id, getActiveUser());
    const totalLikes = getTotalLikes(photos[index].id);

    renderPictureOnPage(pictId, pictAlt, pictUrl, pictAuthor, hasLike, totalLikes);
}

async function getRandomUnsplashPicture(key) {
    const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${key}`);

    return await response.json();
}

const keyAPI = 'gKS_4GVDaKjFQX4Qxl4AmvQilQsupySkZPnGVo4LwfA';
const pictureRes = await getRandomUnsplashPicture(keyAPI);

renderLogOutFormVisibility(getActiveUser());
renderDescription(getActiveUser());
renderPictureOnPage(pictureRes.id, pictureRes.alt_description, pictureRes.urls.regular, pictureRes.user.username, getLike(pictureRes.id, getActiveUser()), getTotalLikes(pictureRes.id));

if (getActiveUser()) {
    pushPhoto(pictureRes, getActiveUser());
    switchClassToLike(getLike(pictureRes.id, getActiveUser()));
}


/**
 * события, связанные с авторизацией пользователя
*/
userFormEl.addEventListener('click', ({ target }) => {
    if (target.closest('.login__button')) {
        const userName = loginFormEl.querySelector('.login__username').value.trim();
        if (userName !== '' && userName !== null) {
            setActiveUser(userName);
            pushUser(userName);
            renderLogOutFormVisibility(getActiveUser());
            renderDescription(getActiveUser());
            pushPhoto(pictureRes, userName);
            switchClassToLike(getLike(pictureRes.id, getActiveUser()));
        };
    }

    if (target.closest('.logout__button')) {
        logOutActiveUserInPage();
        renderLogOutFormVisibility(getActiveUser());
        renderDescription(getActiveUser());
        renderPictureOnPage(pictureRes.id, pictureRes.alt_description, pictureRes.urls.regular, pictureRes.user.username, getLike(pictureRes.id, getActiveUser()), getTotalLikes(pictureRes.id));
        pointsEl.innerHTML = '';
        switchClassToLike(getLike(pictureRes.id, getActiveUser()));
        navigationEl.innerHTML = '';
    }
});


/**
 * События, связанные с историей просмотров
*/
descriptionEl.addEventListener('click', ({ target }) => {
    if (getActiveUser()) {
        if (target.closest('.history')) {
            const photos = getAllPhoto(getActiveUser());
            renderPictureByIndex(0);
            renderNavigationButtons();
            renderPicturesPoints(photos);
        }
        if (target.closest('.random')) {
            renderPictureOnPage(pictureRes.id, pictureRes.alt_description, pictureRes.urls.regular, pictureRes.user.username, getLike(pictureRes.id, getActiveUser()), getTotalLikes(pictureRes.id));
            navigationEl.innerHTML = '';
            pointsEl.innerHTML = '';
        }
    }
});

navigationEl.addEventListener('click', ({ target }) => {
    if (getActiveUser()) {
        if (target.closest('.prev')) {
            const index = getIndexPhotoById(pictureEl.dataset.id, getActiveUser());
            const photos = getAllPhoto(getActiveUser());
            const nextIndex = (index === 0) ? photos.length - 1 : index - 1;
            renderPictureByIndex(nextIndex);
        }

        if (target.closest('.next')) {
            const index = getIndexPhotoById(pictureEl.dataset.id, getActiveUser());
            const photos = getAllPhoto(getActiveUser());
            const nextIndex = (index === photos.length - 1) ? 0 : index + 1;
            renderPictureByIndex(nextIndex);
        }
    }
});

pointsEl.addEventListener('click', ({ target }) => {
    const index = getIndexPhotoById(target.dataset.id, getActiveUser());
    console.log(index);
    renderPictureByIndex(index);
});


/**
 * События, связанные с отметкой и количеством лайков
*/
pushLikeEl.addEventListener('click', (e) => {
    const activeUser = getActiveUser();
    const id = pictureEl.dataset.id;

    if (activeUser) {
        if (!getLike(id, activeUser)) {
            pushLike(id, activeUser);
            addLikeToTotal(id, activeUser)
        } else {
            removeLike(id, activeUser);
            removeLikeToTotal(id, activeUser);
        }
        switchClassToLike(getLike(id, activeUser));
        renderTotalLikesInfo(getTotalLikes(id));
    }
});
