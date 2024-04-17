import { saveLSLessons, loginUserInPage, setActiveUser, logOutUserInPage, hasActiveUser, lessons } from "./storage.js";

function generateLessonInHTML(lesson) {
    let classRegister = 'lesson__register';
    let classCancel = 'lesson__cancel-register';
    if (lesson.currentParticipants === lesson.maxParticipants || lesson.regUsers.includes(hasActiveUser())) {
        classRegister = 'nonactive';
    }
    if (!lesson.regUsers.includes(hasActiveUser())) {
        classCancel = 'nonactive';
    }
    return `
        <div class="lesson" id=${lesson.id}>
            <div class="lesson__name">${lesson.name}</div>
            <div class="lesson__time">${lesson.time}</div>
            <div class="lesson__max-participants">${lesson.maxParticipants}</div>
            <div class="lesson__current-participants">${lesson.currentParticipants}</div>
            <button class="${classRegister} button">записаться</button>
            <button class="${classCancel} button">отменить запись</button>
        </div>
    `;
}

const contentEl = document.querySelector('.content');
const loginFormEl = document.querySelector('.login__form');
const userFormEl = document.querySelector('.user__form');

contentEl.innerHTML += lessons.map(lesson => generateLessonInHTML(lesson)).join('');

function logOutFormVisibility() {
    loginFormEl.style.display = 'none';
    userFormEl.insertAdjacentHTML('beforeend', '<button class="logout__button">Выйти</button>');
}

document.addEventListener('DOMContentLoaded', function (e) {
    if (hasActiveUser()) {
        logOutFormVisibility();
    }
});

userFormEl.addEventListener('click', function ({ target }) {
    if (target.closest('.login__button')) {
        const userName = loginFormEl.querySelector('.login__username').value;
        if (userName !== '') {
            loginUserInPage(userName)
            setActiveUser(userName)
        };
        logOutFormVisibility();
    }

    if (target.closest('.logout__button')) {
        console.log('booom');
        target.style.display = 'none';
        loginFormEl.style.display = '';
        logOutUserInPage();
    }
});

contentEl.addEventListener('click', function ({ target }) {
    if (target.closest('.lesson__register')) {

        const index = lessons.findIndex(lesson => lesson.id === +target.parentElement.id);

        const user = hasActiveUser();
        if (!lessons[index].regUsers.includes(user)) {
            lessons[index].regUsers.push(user);
            if (lessons[index].currentParticipants < lessons[index].maxParticipants) {
                target.parentElement
                    .querySelector('.lesson__current-participants')
                    .textContent = ++lessons[index].currentParticipants;

                saveLSLessons(lessons);
            }
        }

    }
});