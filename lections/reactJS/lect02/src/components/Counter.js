import React, { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <span className='counter'>{count}</span>
            <button className='counter-button' onClick={updateCount}>+1</button>
        </div>
    )
}