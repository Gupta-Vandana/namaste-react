import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action) => {           // this reducer function will map to an action
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            console.log(current(state));
            state.items.length = 0;
        }
    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;