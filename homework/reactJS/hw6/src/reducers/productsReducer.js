import { ADD_PRODUCT, DELETE_PRODUCT, TOGGLE_AVAILABLE } from '../actions/productActions';

const initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, {
                id: Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price,
                available: true
            }];
        case DELETE_PRODUCT:
            return state.filter(product =>
                product.id !== action.payload.id
            );
        case TOGGLE_AVAILABLE:
            return state.map(product =>
                product.id === action.payload.id ? { ...product, available: !product.available } : product
            );
        default:
            return state;
    }
};

export default productsReducer;