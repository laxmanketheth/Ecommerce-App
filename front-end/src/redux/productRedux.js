import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    
    name: "product",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    
    reducers: {

        //===============GET ALL PRODUCTs==============//

        getProductStart : (state) => {
            state.isFetching = true;
            state.error = false;
            // console.log();
        },
        getProductSuccess : (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
            // console.log(state.products);
        },
        getProductFailure : (state) => {
            state.isFetching = false;
            state.error = true
        },

        //===============ADD PRODUCTS===============//

        addProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
          },
          addProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
          },


        //===============DELETE PRODUCTs===============//

        deleteProductStart : (state) => {
          state.isFetching = true;
          state.error = false;
          // console.log();
         },
         deleteProductSuccess : (state, action) => {
          state.isFetching = false;
          // console.log(state);
          state.products = state.products.filter(item => item._id !== action.payload);
          // console.log(state.products);
          
          // state.products.splice(
          //   state.products.findIndex(item => item._id === action.payload),//it helps us to find the index of product that we want to delete using splice method
          //   1
          // )
          
         },
         deleteProductFailure : (state) => {
          state.isFetching = false;
          state.error = true
       }
    }
});

export const {  getProductStart, 
                getProductSuccess, 
                getProductFailure,
                addProductStart,
                addProductSuccess,
                addProductFailure,
                deleteProductStart,
                deleteProductSuccess,
                deleteProductFailure
              } = productSlice.actions;

export default productSlice.reducer;