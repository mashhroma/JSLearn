"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

const dishes = [
  { name: 'Маргарита', type: 'Пицца' },
  { name: 'Пепперони', type: 'Пицца' },
  { name: 'Три сыра', type: 'Пицца' },
  { name: 'Филадельфия', type: 'Суши' },
  { name: 'Калифорния', type: 'Суши' },
  { name: 'Чизмаки', type: 'Суши' },
  { name: 'Сеякемаки', type: 'Суши' },
  { name: 'Тирамису', type: 'Десерт' },
  { name: 'Чизкейк', type: 'Десерт' },
];

const chiefs = [
  {
    name: 'Олег',
    type: 'Пицца'
  },
  {
    name: 'Андрей',
    type: 'Суши'
  },
  {
    name: 'Анна',
    type: 'Десерт'
  }
];

// Посетитель ресторана.
class Client {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  orderList = [];
  orderCounter = 0;

  hasClientOrder(client) {
    const clients = this.orderList.map((order) => order.client);
    if (clients.includes(client)) return true;
    return false;
  }

  hasDishInClientOrder(orderedDishes, currentDishName) {
    const dishNames = orderedDishes.map((dish) => dish.name);
    if (dishNames.includes(currentDishName)) return true;
    return false;
  }

  hasDishInMenu(orderDishes) {
    const notInMenu = [];
    const dishMenuNames = dishes.map((dish) => dish.name);
    orderDishes.forEach(orderDish => {
      if (!dishMenuNames.includes(orderDish.name))
        notInMenu.push(orderDish);
    });
    return notInMenu;
  }

  getOrderByClient(client) {
    const order = this.orderList.find((order) => order.client === client);
    return order;
  }

  addDishToOrder(client, orderDishes) {
    const orderedDishes = this.getOrderByClient(client).dishes;

    orderDishes.forEach(currentDish => {
      if (this.hasDishInClientOrder(orderedDishes, currentDish.name)) {
        const dish = orderedDishes.find((dish) => dish.name === currentDish.name);
        const dishIndex = orderedDishes.indexOf(dish);
        orderedDishes[dishIndex].quantity += currentDish.quantity;
      } else {
        orderedDishes.push(currentDish);
      }
    });

    this.getOrderByClient(client).dishes = orderedDishes;
  }

  newOrder(client, ...orderDishes) {
    const checkMenu = this.hasDishInMenu(orderDishes);
    if (checkMenu.length > 0) {
      let errorMessage = '';
      checkMenu.forEach(dish => {
        errorMessage += `${dish.type} "${dish.name}" - такого блюда не существует.`
      });
      throw new Error(errorMessage);
    };

    if (this.hasClientOrder(client)) {
      this.addDishToOrder(client, orderDishes);
    } else {
      this.orderCounter++;
      const order = {
        id: this.orderCounter,
        client: client,
        dishes: orderDishes,
      };

      this.orderList.push(order);
    }

    this.printOrderMessage(this.getOrderByClient(client));
  }

  printOrderMessage(order) {
    let message = '';
    order.dishes.forEach((dish) => {
      const chief = chiefs.filter((chief) => chief.type === dish.type)[0].name;
      message += `${dish.type} ${dish.name} - ${dish.quantity}; готовит повар ${chief}\n`;
    });
    console.log(`Клиент ${order.client.getFirstName()} заказал: \n${message} `);
  }

  printOrders() {
    console.log(this.orderList);
  };
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна
// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.