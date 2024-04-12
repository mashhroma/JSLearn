import { getAuthedLogin, logOutUser } from "./storage.js";

const helloMessageEl = document.querySelector('.helloMessage');
const logOutEl = document.querySelector('.logout');
const authedUser = getAuthedLogin();

if (!authedUser) {
    alert('You are not logged in');
    location.href = "login.html";
}

helloMessageEl.textContent = `Hello, ${authedUser}!`;
logOutEl.addEventListener('click', () => {
    logOutUser();
    location.href = "login.html";
});