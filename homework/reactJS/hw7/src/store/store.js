import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "../reducer/tasksSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});