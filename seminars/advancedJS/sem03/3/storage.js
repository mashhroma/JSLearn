const lsUsersKey = 'users';
const lsLoginKey = 'login';
function getUsers() {
    const users = localStorage.getItem(lsUsersKey);
    if (!users) {
        return [];
    }
    return JSON.parse(users);
};

function registerUser(login, password) {
    const users = getUsers();
    users.push({ login, password });
    localStorage.setItem(lsUsersKey, JSON.stringify(users));
}

function loginUser(login, password) {
    const users = getUsers();
    if (!users.some(user => user.login === login && user.password === password)) {
        throw new Error('Invalid login or password');
    }
    localStorage.setItem(lsLoginKey, login);
}

function getAuthedLogin() {
    return localStorage.getItem(lsLoginKey);
}

function logOutUser() {
    localStorage.removeItem(lsLoginKey);
}

export { getUsers, registerUser, loginUser, getAuthedLogin, logOutUser };