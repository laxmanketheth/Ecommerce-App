import { publicRequest,userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess} from "./userRedux";

import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";
import {  addProductStart, addProductSuccess, addProductFailure} from "./productRedux"
import {  deleteProductStart, deleteProductSuccess, deleteProductFailure} from "./productRedux"


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user)
        // console.log(res);
       //making request to login backend api//
        dispatch(loginSuccess(res.data))
        // console.log(res.data);

    }catch(err){
        dispatch(loginFailure());
    }
};

//==============GET PRODUCTS API ===========================//

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        // console.log(res);
       //making request to get products backend api//
        dispatch(getProductSuccess(res.data))
        // console.log(res.data);

    }catch(err){
        dispatch(getProductFailure());
    }
};

//==============ADD PRODUCT API ===========================//

export const addProduct = async (product, dispatch) => {   
    dispatch(addProductStart());    
    try {
        // console.log(
        //     JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
        //     );
        // console.log(userRequest.defaults.headers['token']);
      const res = await userRequest.post(`/products`, product);
    //   console.log(userRequest.defaults.headers);
      dispatch(addProductSuccess(res.data));
    //   console.log("yes");
    } catch (err) {
      dispatch(addProductFailure());
    }
};


//==============DELETE PRODUCT API ===========================//

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    
    try{
        //making request to delete product backend api//
        // const res = await userRequest.delete(`/products ${id}`);
        const res = await userRequest.delete(`/products/${id}`);
        // console.log(res);
       
        dispatch(deleteProductSuccess(id))
        // console.log('item deleted');
      
    }catch(err){
        dispatch(deleteProductFailure());
    }
};
