"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  {
    title: "Thriller",
    artist: "Michael Jackson",
    year: "1981"
  },
  {
    title: "Ray of Light",
    artist: "Madonna",
    year: "1998"
  },
  {
    title: "Oops! I did it again",
    artist: "Britney Spears",
    year: "2000"
  },
  {
    title: "Spice world",
    artist: "Spice girls",
    year: "1998"
  }
];

const musicCollection = {
  albums,
  *[Symbol.iterator]() {
    for (const album of this.albums) {
      yield album;
    }
  }
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}