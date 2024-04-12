import { getUsers, registerUser } from './storage.js';


const loginEl = document.querySelector('.login');
const passwordEl = document.querySelector('.password');
const registrationEl = document.querySelector('.registration');

registrationEl.addEventListener('click', () => {
    const login = loginEl.value;
    const password = passwordEl.value;
    const users = getUsers();

    if (users.some(user => user.login === login)) {
        alert('User already exists');
        return;
    }
    registerUser(login, password);
    location.href = "login.html";
});