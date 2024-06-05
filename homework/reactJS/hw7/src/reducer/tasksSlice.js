import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk("getTasks", async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('/tasksData.json')
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        }, 1000);
    });
});

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        loadStatus: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.pending, (state) => {
                state.loadStatus = "loading";
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.loadStatus = "success";
                state.tasks = action.payload;
            })
            .addCase(getTasks.rejected, (state) => {
                state.loadStatus = "failed";
            });
    },
});

export default tasksSlice.reducer;
