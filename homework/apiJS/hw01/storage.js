let initialData = [
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
];

const lessonsLSKey = 'lessons';
const usersLSKey = 'users';
const activeUserKey = 'activeUser';

if (!localStorage.getItem(lessonsLSKey)) {
    saveLSLessons(initialData.map(item => {
        return {
            regUsers: [],
            ...item
        }
    })
    )
}
if (!localStorage.getItem(usersLSKey)) {
    saveLSUsers([]);
}

const lessons = JSON.parse(localStorage.getItem(lessonsLSKey));
const users = JSON.parse(localStorage.getItem(usersLSKey));

function saveLSLessons(lessons) {
    localStorage.setItem(lessonsLSKey, JSON.stringify(lessons));
}

function saveLSUsers(users) {
    localStorage.setItem(usersLSKey, JSON.stringify(users));
}

function setActiveUser(user) {
    localStorage.setItem(activeUserKey, JSON.stringify(user));
}

function hasActiveUser() {
    return JSON.parse(localStorage.getItem(activeUserKey));
}

function hasUser(user) {
    return users.includes(user);
}

function loginUserInPage(user) {
    if (!hasUser(user)) {
        users.push(user);
        saveLSUsers(users);
    }
    setActiveUser(user);
}

function logOutUserInPage() {
    localStorage.removeItem(activeUserKey);
}


export { saveLSUsers, saveLSLessons, loginUserInPage, setActiveUser, logOutUserInPage, hasActiveUser, lessons, users };
