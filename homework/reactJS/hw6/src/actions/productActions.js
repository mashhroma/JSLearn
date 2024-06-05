export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const TOGGLE_AVAILABLE = "TOGGLE_AVAILABLE";

export const addProduct = (title, description, price) => ({
    type: ADD_PRODUCT,
    payload: { title, description, price },
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: { id },
});

export const toggleAvailable = (id) => ({
    type: TOGGLE_AVAILABLE,
    payload: { id },
});
