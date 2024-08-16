import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name: 'data',
    initialState: {
        items: [],
    },
    reducers: {
        setdata: (state, action) => {
            state.items.push(action.payload);
        },
        removeData: (state, action) => {
            const index = action.payload;
            if (index >= 0 && index < state.items.length) {
                state.items.splice(index, 1);
            }
        },
        ClearData: (state) => {
            state.items = [];
        }
    }
});

export const { setdata, removeData, ClearData } = appslice.actions;
export default appslice.reducer;
