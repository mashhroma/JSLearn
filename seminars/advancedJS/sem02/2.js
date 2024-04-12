'use strict';
/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser должен иметь свойство premiumExpiration (дата истечения срока действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

class User {
    constructor(name, surname) {
        if (this.constructor === User) {
            throw new Error('Cannot create instance of abstract class User');
        }
        this.name = name;
        this.surname = surname;
    }
}

class PremiumUser extends User {
    constructor(name, surname, premiumExpiration) {
        super(name, surname);
        this.premiumExpiration = premiumExpiration;
    }
}

class RegularUser extends User {

}

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        console.log(`${user.name} ${user.surname} - премиум аккаунт срок действия: ${user.premiumExpiration}`);
    } else if (user instanceof RegularUser) {
        console.log(`${user.name} ${user.surname} - обычный аккаунт`);
    } else {
        console.log('Ошибка');
    }
}

// const user = new PremiumUser('Dina', 'Petrova', "2024");

// const usrr2 = new RegularUser("Maximo", "Sidorov");

// getAccountInfo(user);

// getAccountInfo(usrr2);

// getAccountInfo({});

// const user3 = new User("Dina", "Petrova");