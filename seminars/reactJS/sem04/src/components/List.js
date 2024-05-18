import React from 'react';

// Компонент List принимает props items (массив элементов для списка) и renderItem (функцию для рендеринга каждого элемента)
const List = ({ items, renderItem }) => {
    return (
        <ul>
            {items.map((item, index) => (
                // Вызываем функцию renderItem для каждого элемента списка, передавая элемент и его индекс
                <li key={index}>{renderItem(item, index)}</li>
            ))}
        </ul>
    );
};

export default List;