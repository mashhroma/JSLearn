import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const addProductInCart = (product, count = 1) => {
        if (cartProducts.find(currProduct => currProduct.id === product.id)) {
            deleteProductFromCart(product)
        } else {
            const newProduct = { ...product, quantityInCart: count };
            setCartProducts((prev) => [...prev, newProduct]);
        }
    }

    const changeQuantity = (product, count) => {
        setCartProducts(() => cartProducts.map(currProduct => currProduct.id === product.id ? { ...product, quantityInCart: count } : currProduct));
    }

    const deleteProductFromCart = (product) => {
        setCartProducts(() => cartProducts.filter(currProduct => currProduct.id !== product.id));
    }

    const checkedProduct = (product) => {
        return cartProducts.find(currProduct => currProduct.id === product.id);
    }

    const getCountInCart = () => {
        return cartProducts.reduce((acc, prod) => acc + prod.quantityInCart, 0)
    }

    const getSumInCart = () => {
        return cartProducts.reduce((acc, prod) => acc + (prod.quantityInCart * prod.price), 0)
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <CartContext.Provider value={{ cartProducts, addProductInCart, changeQuantity, deleteProductFromCart, checkedProduct, getCountInCart, getSumInCart }}>
            {children}
        </CartContext.Provider>
    );
};
