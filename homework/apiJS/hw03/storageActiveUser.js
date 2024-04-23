const activeUserKey = 'activeUser';

function setActiveUser(user) {
    localStorage.setItem(activeUserKey, JSON.stringify(user));
}

function getActiveUser() {
    return JSON.parse(localStorage.getItem(activeUserKey));
}

function logOutActiveUserInPage() {
    localStorage.removeItem(activeUserKey);
}


export { setActiveUser, getActiveUser, logOutActiveUserInPage }
