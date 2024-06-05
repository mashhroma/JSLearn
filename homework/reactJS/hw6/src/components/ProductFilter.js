import React, { useContext } from 'react';
import { FilterContext } from '../contexts/FilterContext';

const ProductFilter = () => {
    const { filter, setFilter } = useContext(FilterContext);

    const handleChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <select className='filter' value={filter} onChange={handleChange}>
            <option value="all">Все</option>
            <option value="available">Доступные</option>
            <option value="unavailable">Недоступные</option>
        </select>
    );
};

export default ProductFilter;
