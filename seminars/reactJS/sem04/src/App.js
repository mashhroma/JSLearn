import React from "react";
// import { Box } from './components/Box';
// import List from "./components/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import { ListPage } from "./components/ListPage";
import { DetailPage } from "./components/DetailPage";

// Пример использования Box
// const App = () => {
//   return (
//     <div>
//       <h1>Пример использования компонента Box</h1>
//       <Box>
//         <p>Текст внутри Box</p>
//       </Box>
//       <Box>
//         <img src="https://via.placeholder.com/150" alt="Placeholder" />
//       </Box>
//       <Box>
//         <div style={{ background: 'lightblue', padding: '10px' }}>
//           Другой компонент внутри Box
//         </div>
//       </Box>
//     </div>
//   );
// };
// const App = () => {
//   // Массив элементов для списка
//   const items = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6', 'Пункт 7'];

//   // Функция для рендеринга каждого элемента списка
//   const renderItem = (item, index) => {
//     // Пример условного стиля на основе индекса
//     const style = { color: index % 2 === 0 ? 'blue' : 'red' };
//     return (
//       <div style={style}>
//         {item} - Уникальный стиль
//       </div>
//     );
//   };
//   return (
//     <div>
//       <h1>Пример списка с уникальными стилями</h1>
//       <List items={items} renderItem={renderItem} />
//     </div>
//   );
// };

// Создайте два компонента: HomePage.jsx и AboutPage.jsx.
// В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
// Настройка роутинга:
// В корневом компоненте (App.jsx), импортируйте все необходимые компоненты
// Для навигации между страницами, добавьте в верхнюю часть каждого компонента (HomePage и AboutPage) навигационные ссылки (<Link to="/">Главная</Link> и <Link to="/about">О нас</Link>).
// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }



// Создайте маленькое приложение со страницей списка (ListPage) и страницей деталей (DetailPage).
// является ссылкой На ListPage отобразите список элементов (например, статей или продуктов), где каждый элемент на DetailPage, содержащую детальную информацию об элементе. Используйте react-router-dom для настройки маршрутизации.
// На DetailPage используйте useParams для извлечения параметра из URL (например, ID элемента) и отобразите детальную информацию об элементе.
const App = () => {
  const pages = [
    {
      id: 101,
      title: 'Title 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab expedita eligendi aut excepturi ratione hic vitae enim, sunt soluta!'
    },
    {
      id: 102,
      title: 'Title 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab expedita eligendi aut excepturi ratione hic vitae enim, sunt soluta!'
    },
    {
      id: 103,
      title: 'Title 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab expedita eligendi aut excepturi ratione hic vitae enim, sunt soluta!'
    },
    {
      id: 104,
      title: 'Title 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab expedita eligendi aut excepturi ratione hic vitae enim, sunt soluta!'
    },
    {
      id: 105,
      title: 'Title 5',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ab expedita eligendi aut excepturi ratione hic vitae enim, sunt soluta!'
    }
  ]

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage pages={pages} />} />
          <Route path="/pages/:id" element={<DetailPage pages={pages} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
