import { saveLSLessons, loginUserInPage, logOutUserInPage, hasActiveUser, lessons } from "./storage.js";

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

function generateHTMLcontent(htmlSection, lessons) {
    const title = `
    <div class="lesson">
        <div class="lesson__name">название занятия</div>
        <div class="lesson__name">время проведения занятия</div>
        <div class="lesson__max-size">максимальное количество участников</div>
        <div class="lesson__curr-size">текущее количество участников</div>
        <div class="lesson__register">кнопка "записаться"</div>
        <div class="lesson__cancel-register">кнопка "отменить запись"</div>
    </div>
    `;
    htmlSection.innerHTML = title + lessons.map(lesson => generateLessonInHTML(lesson)).join('');
}

function logOutFormVisibility(isVisible) {
    if (isVisible) {
        loginFormEl.style.display = 'none';
        userFormEl
            .insertAdjacentHTML(
                'beforeend',
                `<span class='logout'>Привет, ${hasActiveUser()}<button class="logout__button button">Выйти</button></span>`
            );
    }
    if (!isVisible) {
        userFormEl
            .querySelector('.logout')
            .remove();
        loginFormEl.style.removeProperty('display');
    }
}

const contentEl = document.querySelector('.content');
const loginFormEl = document.querySelector('.login__form');
const userFormEl = document.querySelector('.user__form');

generateHTMLcontent(contentEl, lessons);

document.addEventListener('DOMContentLoaded', (e) => {
    if (hasActiveUser()) {
        logOutFormVisibility(true);
    }
});

userFormEl.addEventListener('click', ({ target }) => {
    if (target.closest('.login__button')) {
        const userName = loginFormEl.querySelector('.login__username').value.trim();
        if (userName !== '' && userName !== null) {
            loginUserInPage(userName);
            logOutFormVisibility(true);
            generateHTMLcontent(contentEl, lessons);
        };
    }

    if (target.closest('.logout__button')) {
        logOutUserInPage();
        logOutFormVisibility(false);
        generateHTMLcontent(contentEl, lessons);
    }
});

contentEl.addEventListener('click', ({ target }) => {
    const index = lessons.findIndex(lesson => lesson.id === +target.parentElement.id);
    const user = hasActiveUser();

    if (target.closest('.lesson__register')) {
        if (!lessons[index].regUsers.includes(user) && user !== null) {
            lessons[index].regUsers.push(user);
            if (lessons[index].currentParticipants < lessons[index].maxParticipants) {
                target.parentElement
                    .querySelector('.lesson__current-participants')
                    .textContent = ++lessons[index].currentParticipants;

                saveLSLessons(lessons);

                target.closest('.lesson__register').classList.add('nonactive');
                target.closest('.lesson__register').classList.remove('lesson__register');
                target.nextElementSibling.closest('.nonactive').classList.add('lesson__cancel-register');
                target.nextElementSibling.closest('.nonactive').classList.remove('nonactive');
            }
        }
    }

    if (target.closest('.lesson__cancel-register')) {
        if (lessons[index].regUsers.includes(user) && user !== null) {
            const regUserIndex = lessons[index].regUsers.findIndex(regUser => regUser === user);
            lessons[index].regUsers.splice(regUserIndex, 1);
            target.parentElement
                .querySelector('.lesson__current-participants')
                .textContent = --lessons[index].currentParticipants;

            saveLSLessons(lessons);

            target.closest('.lesson__cancel-register').classList.add('nonactive');
            target.closest('.lesson__cancel-register').classList.remove('lesson__cancel-register');
            target.previousElementSibling.closest('.nonactive').classList.add('lesson__register');
            target.previousElementSibling.closest('.nonactive').classList.remove('nonactive');
        }
    }
});