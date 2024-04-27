// Создать компонент Counter, который отображает кнопку и число. 
// Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку.

import React, { useState } from 'react';

const Counter = () => {
    // Инициализация состояния счётчика со значением 0
    const [count, setCount] = useState(0);

    // Функция для увеличения счётчика на 1
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={incrementCount}>Увеличить на 1</button>
        </div>
    );

}

export default Counter;