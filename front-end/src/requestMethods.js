import { current } from "@reduxjs/toolkit";
import axios from "axios";

// const BASE_URL = "http://localhost:8080/api/"
const BASE_URL = "https://ecommerce-app-api-seven.vercel.app/"

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzQwODc5Y2Y0NDZmNTg1YmU0M2IyOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODIxNTIwNSwiZXhwIjoxNjk4NDc0NDA1fQ.p3bufKzsbbNy-JULrb9irLUojrZhZuvn1IJWL_mScVI";
// console.log(TOKEN);

// const TOKEN =  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user
// console.log(user);
const currentUser = user && JSON.parse(user).currentUser
    
const TOKEN = currentUser?.accessToken


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});//it can be accessed without logggin in or without accessToken

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
})////it can be accessed only when loggged in or with accessToken