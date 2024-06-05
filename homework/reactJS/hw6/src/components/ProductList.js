import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailable } from '../actions/productActions';
import { FilterContext } from '../contexts/FilterContext';
import withFilter from '../hoc/withFilter';

const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const { filter } = useContext(FilterContext);

    const filteredProducts = withFilter(products, filter);

    const handleToggleAvailable = (id) => {
        dispatch(toggleAvailable(id));
    };

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    };

    return (
        <ul>
            {filteredProducts.map(product => {
                return <li
                    key={product.id}
                    style={{ opacity: product.available ? '1' : '0.4' }}
                >
                    <label htmlFor="available" onClick={() => handleToggleAvailable(product.id)}>
                        Сделать  {product.available ? 'недоступной' : 'доступной'}
                        <input type="checkbox" name="available" id="available" />
                    </label>

                    <h2>{product.title}</h2>
                    <p>Описание: {product.description}</p>
                    <b>Цена: {product.price}</b>

                    <button onClick={() => handleDeleteProduct(product.id)}>Удалить товар</button>
                </li>
            })}
        </ul>
    );
};

export default ProductList;