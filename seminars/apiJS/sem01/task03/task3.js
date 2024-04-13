// Задание 3.
// Необходимо создать страницу со списком статей.
// Каждая статья состоит из id, заголовка, текста статьи.
// id - будем брать из unix timestamp.
// Необходимо подготовить список статей в JSON-формате,
// которые будут выводиться на странице при первом ее
// открытии.
// Необходимо реализовать возможность удаления статьи.
// Необходимо реализовать возможность добавления статьи.
// Необходимо реализовать возможность изменения статьи,
// ввод данных можно реализовать через prompt.
// Статьи должны сохраняться в локальное хранилище
// браузера, и должны быть доступны после перезагрузки
// страницы.

const initialArticles = [
    {
        id: new Date().getTime(),
        title: 'Article 1',
        content:
            'Lorem1, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus natus voluptas repudiandae nisi, assumenda magni nostrum cum sit totam?',
    },
    {
        id: new Date().getTime(),
        title: 'Article 2',
        content:
            'Lorem2, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus natus voluptas repudiandae nisi, assumenda magni nostrum cum sit totam?',
    },
    {
        id: new Date().getTime(),
        title: 'Article 3',
        content:
            'Lorem3, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus natus voluptas repudiandae nisi, assumenda magni nostrum cum sit totam?',
    },
    {
        id: new Date().getTime(),
        title: 'Article 4',
        content:
            'Lorem4, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus natus voluptas repudiandae nisi, assumenda magni nostrum cum sit totam?',
    },
    {
        id: new Date().getTime(),
        title: 'Article 5',
        content:
            'Lorem5, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus natus voluptas repudiandae nisi, assumenda magni nostrum cum sit totam?',
    },
];

const articlesKey = 'articles';

if (!localStorage.getItem(articlesKey)) {
    localStorage.setItem(articlesKey, JSON.stringify(initialArticles));
}

const articles = getLsArticles();

const articlesEl = document.querySelector('.articles');
// articlesEl.innerHTML = articles.map(article => {
//     return `
//         <div class="article">
//             <h3 class="title">${article.title}</h3>
//             <p class="content">${article.content}</p>
//         </div>
//     `
// }).join('');

articles.forEach((article) => {
    articlesEl.insertAdjacentHTML('beforeend', getArticleHtml(article));
});

articlesEl.addEventListener('click', ({ target }) => {
    if (target.closest('.removeBtn')) {
        const articleEl = target.closest('.article');
        const articleId = articleEl.dataset.id;

        articleEl.remove();

        const articles = getLsArticles();
        const foundedIndex = articles.findIndex((article) => article.id === Number(articleId));

        if (foundedIndex !== -1) {
            articles.splice(foundedIndex, 1);
        }

        saveArticles(articles);
        return;
    }

    if (target.closest('.editBtn')) {
        const articleEl = target.closest('.article');
        const articleId = articleEl.dataset.id;

        const title = prompt('Введите заголовок');
        const content = prompt('Введите контент');

        const articles = getLsArticles();

        const editingArticle = articles.find((article) => article.id === Number(articleId));
        if (!editingArticle) {
            alert('Статья не найдена');
            return;
        }

        editingArticle.title = title;
        editingArticle.content = content;
        saveArticles(articles);

        articleEl.querySelector('.title').textContent = title;
        articleEl.querySelector('.content').textContent = content;
    }
});

document.querySelector('.addBtn').addEventListener('click', () => {
    const title = prompt('Введите заголовок');
    const content = prompt('Введите контент');
    const id = new Date().getTime();

    const articles = getLsArticles();
    const newArticle = { id, title, content };
    articles.push(newArticle);
    saveArticles(articles);
    articlesEl.insertAdjacentHTML('beforeend', getArticleHtml(newArticle));
});

function getLsArticles() {
    return JSON.parse(localStorage.getItem(articlesKey));
}

function saveArticles(articles) {
    localStorage.setItem(articlesKey, JSON.stringify(articles));
}

function getArticleHtml(article) {
    return `
    <div class="article" data-id="${article.id}">
        <h3 class="title">${article.title}</h3>
        <p class="content">${article.content}</p>
        <button class="removeBtn">Удалить</button>
        <button class="editBtn">Редактировать</button>
        <hr>
    </div>
    `;
}