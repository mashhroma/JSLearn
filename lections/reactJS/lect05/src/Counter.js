import React from "react";
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h1>Счетчик Redux: {counter}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}

export default Counter;