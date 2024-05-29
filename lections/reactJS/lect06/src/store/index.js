import {configuresStore} from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configuresStore({
    reducer: rootReducer
});

export default store;
