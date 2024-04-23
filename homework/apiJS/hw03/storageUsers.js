const usersLSKey = 'users';

if (!localStorage.getItem(usersLSKey)) {
    saveLSUsers({});
}
let users = JSON.parse(localStorage.getItem(usersLSKey));

function saveLSUsers(users) {
    localStorage.setItem(usersLSKey, JSON.stringify(users));
}

function getUser(user) {
    return users[user];
}

function getLike(renderPictureId, activeUser) {
    return users[activeUser]?.find((picture) => picture.id === renderPictureId)?.like;
}

function getAllPhoto(activeUser) {
    return users[activeUser];
}

function getIndexPhotoById(pictureId, activeUser) {
    return users[activeUser].findIndex(picture => picture.id === pictureId);
}

function pushUser(user) {
    if (!getUser(user)) {
        const newUser = {};
        newUser[user] = [];
        users = { ...users, ...newUser };
        saveLSUsers(users);
    }
}

function pushPhoto(newPicture, activeUser) {
    const activePhoto = users[activeUser]
        .find((picture) => picture.id === newPicture.id)
    if (!activePhoto) {
        users[activeUser]
            .push({
                id: newPicture.id,
                url: newPicture.urls.regular,
                alt: newPicture.alt_description,
                author: newPicture.user.username,
                like: false
            });
        saveLSUsers(users);
    }
}

function pushLike(likedPictureId, activeUser) {
    users[activeUser]
        .find((picture) => picture.id === likedPictureId)
        .like = true;
    saveLSUsers(users);
}

function removeLike(dislikedPictureId, activeUser) {
    const index = users[activeUser]
        .findIndex(picture => picture.id === dislikedPictureId);
    users[activeUser][index].like = false;
    saveLSUsers(users);
}


export { getUser, getLike, getAllPhoto, getIndexPhotoById, pushUser, pushPhoto, pushLike, removeLike }
