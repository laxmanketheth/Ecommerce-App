import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers:{
        addProduct: (state, action) =>{
            // console.log(action.payload);
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        
        removeProduct: (state, action) => {
            const product = state.products.find(item => item._id === action.payload);
            if(product){
                state.products = state.products.filter(item => item._id !== action.payload);
                state.quantity -= 1;
                state.total -= product.price * product.quantity
            }
        },
    
        clearCart: (state) => {
            state.quantity = 0,
            state.products = [],
            state.total = 0
        },

    },
});

export const {addProduct, clearCart, removeProduct} = cartSlice.actions;
export default cartSlice.reducer;