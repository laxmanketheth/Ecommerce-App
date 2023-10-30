import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzQwODc5Y2Y0NDZmNTg1YmU0M2IyOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODIxNTIwNSwiZXhwIjoxNjk4NDc0NDA1fQ.p3bufKzsbbNy-JULrb9irLUojrZhZuvn1IJWL_mScVI";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})