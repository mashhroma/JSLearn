import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(addProduct(title, description, price));
        setTitle('');
        setDescription('');
        setPrice('');
    };

    return (
        <div className='add'>
            <h3>Форма добавления нового товара</h3>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

            <button onClick={handleAddProduct}>Добавить товар</button>
        </div>
    );
};

export default AddProduct;