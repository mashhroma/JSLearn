import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async () => {
    return new Promise((resolve, reject) => {
        fetch('/productsData.json')
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loadStatus: "",
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loadStatus = "loading";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loadStatus = "success";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.loadStatus = "failed";
            });
    },
});

export default productsSlice.reducer;
