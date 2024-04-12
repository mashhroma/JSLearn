/*
Задание 2: 
Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. 
Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в localStorage. При следующем посещении 
сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.
 
1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в localStorage.
4. При следующем посещении сайта автоматически загрузите сохраненные параметры из localStorage и отобразите ранее созданный комплект.
5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить localStorage).
*/

const localStorageKey = 'settings';
const tableColorEl = document.querySelector('#table-color');
const chairMaterialEl = document.querySelector('#chair-material');
const saveBtnEl = document.querySelector('.save-btn');
const loadBtnEl = document.querySelector('.load-btn');
const clearBtnEl = document.querySelector('.clear-btn');

saveBtnEl.addEventListener('click', () => {
    const tableColor = tableColorEl.value;
    const chairMaterial = chairMaterialEl.value;
    localStorage.setItem(localStorageKey, JSON.stringify({
        tableColor,
        chairMaterial
    }));
});

loadBtnEl.addEventListener('click', () => {
    loadSettings();
});

loadSettings();

function loadSettings() {
    if (localStorage.getItem(localStorageKey)) {
        const settings = JSON.parse(localStorage.getItem(localStorageKey))
        tableColorEl.value = settings.tableColor;
        chairMaterialEl.value = settings.chairMaterial;
    }
};

clearBtnEl.addEventListener('click', () => {
    localStorage.removeItem(localStorageKey);
});
