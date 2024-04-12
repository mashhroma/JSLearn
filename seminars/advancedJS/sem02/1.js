'use strict';
/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является нормальным числом и дробная часть не превышает двух знаков, в противном случае выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является нормальным числом и дробная часть не превышает двух знаков, и сумма снятия не может превышать текущий баланс аккаунта в противном случае выбрасывайте соответствующую ошибку.
*/

class BankAccount {
    #balance = 0;
    getBalance() {
        return Math.round(this.#balance * 100) / 100;
    }
    deposit(amount) {
        this.#amountIsCorrect(amount);
        this.#balance += amount;
    }
    withdraw(amount) {
        this.#amountIsCorrect(amount);
        if (amount > this.#balance) {
            throw new Error('Сумма снятия не может превышать текущий баланс');
        }
        this.#balance -= amount;
    }
    #amountIsCorrect(amount) {
        if (!Number.isFinite(amount)) {
            throw new Error("Вы передали не корректное число")
        }
        if (amount <= 0) {
            throw new Error('Сумма не может быть отрицательной или равна 0');
        }
        // if (amount % 0.01 !== 0) {
        //     throw new Error('Дробная часть суммы не может превышать 2 знака');
        // }
        const arr = amount.toString().split(".")
        if (arr[1]?.length > 2) {
            throw new Error('Дробная часть суммы не может превышать 2 знака');
        }
    }
}

const account = new BankAccount();

// console.log(account.getBalance());

// account.deposit(100);

// console.log(account.getBalance());

// account.withdraw("25");

// console.log(account.getBalance());
