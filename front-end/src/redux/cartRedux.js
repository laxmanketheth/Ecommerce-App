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
        // console.log(state.products);
        
        },
        //  removeProduct(state, action){
        //     return state.products.filter(item => item.id !== action.payload._id)
        // },

        // removeProduct(state, action) {
        //     if (!state.products) {
        //       // If products property is undefined, return the initial state
        //       return state;
        //     }
          
        //     return {
        //       ...state,
        //       products: state.products.filter(item => item.id !== action.payload._id)
        //     };
        //   },

        clearCart: (state) => {
            // console.log("clearCArt");
            console.log(state.products,state.quantity);
            state.quantity = 0,
            state.products = [],
            state.total = 0
            // console.log(state);
        },

    },
});

export const {addProduct, clearCart} = cartSlice.actions;
export default cartSlice.reducer;