"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];

    constructor(books) {
        if (new Set(books).size !== books.length) {
            throw new Error('Массив не должен содержать дубликаты.');
        }
        this.#books = books;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error('Книга с таким названием уже существует в списке');
        }
        this.#books.push(title);
    }

    removeBook(title) {
        if (!this.hasBook(title)) {
            throw new Error('Книги с таким названием нет в списке');
        }
        const index = this.#books.indexOf(title);
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        // if (this.#books.includes(title)) {
        //     return true;
        // }
        // return false;
        return this.#books.includes(title);
    }
}


const myLibrary = new Library(['Война и мир', 'Преступление и наказание', 'Вишневый сад', 'Ревизор']);

console.log(myLibrary.allBooks);

myLibrary.addBook('Гроза');
console.log(myLibrary.allBooks);

myLibrary.removeBook('Вишневый сад');
console.log(myLibrary.allBooks);

console.log(myLibrary.hasBook('Преступление и наказание'));
