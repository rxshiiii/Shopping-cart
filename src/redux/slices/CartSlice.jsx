import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [], // State is now just an array
    reducers: {
        add: (state, action) => {
            state.push(action.payload); // Directly push to the array
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload); // Return a new array without the item
        },
    },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
