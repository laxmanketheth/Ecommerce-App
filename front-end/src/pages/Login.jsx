import styled from '@emotion/styled'
import React, { useState } from 'react'
import mobile from '../responsive'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    /* border: 3px solid blue; */
    ${mobile({
           width: "100%"
    })}
    `
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
   
`
const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    /* border: 2px solid blue; */
    z-index: -1;
    font-size:300px;
    text-align: center;
    background-color: #ecdfc8;
    letter-spacing: 70px;
    padding: 120px;
    color: rgb(0, 0, 0,0.5);
    ${mobile({
            // display:"none",
            color:"transparent",
            backgroundColor:"#ecdfc8"
    })}
    `
// const Text = styled.h1``
const FormBox = styled.div`
    /* border: 1px solid green; */
    height: 50vh;
    width: 40vw;
    background-color:rgb(216, 199, 169,0.5);
    margin-top: 160px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mobile({
            border:"1px solid white",
            width:"80vw"
    })}

    `
const Title = styled.h1`
    background-color: black;
    width: 100%;
    height: 60px;
    text-align: center;
    padding-top: 8px;
    color: #ecdfc8;
    `
const Form = styled.form`
    height: 240px;
    width: 400px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: 40px;
    /* background-color: aliceblue; */
    `
const Input = styled.input`
    background-color: rgb(255, 255, 255,0.8);
    outline: none;
    width: 75%;
    border-radius: 5px;
    height: 35px;
    padding-left: 4px;
    `
const Button = styled.button`
    background-color:black;
    color: #ecdfc8;
    width: 55%;
    height: 40px;
   &:hover{
    transform: translateY(-1px);
   }
   font-size: 22px;
   &:disabled{
    color: green;
    background-color: red;
    cursor: not-allowed;
   }
`
const Link = styled.a`
font-size: 13px;
   &:hover{
    cursor: pointer;
   }
`
const Error = styled.span`
    color: red;
`

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error,currentUser} = useSelector((state) => state.user)
    

    const handleClick = (e) =>{
        e.preventDefault()
        login( dispatch, {username, password})
    }

    return (
        <>
        <Navbar/>
        <Container >
            <Wrapper>
                <Background>
                    LUXE.
                </Background>

                <FormBox>
                    <Title>Log In</Title>
                    <Form>
        
                        <Input placeholder='User_Name' onChange ={(e)=> setUsername(e.target.value)} />
                        <Input placeholder='Password' type='password' onChange ={(e)=> setpassword(e.target.value)}/>               
                        <Button onClick={handleClick} disabled= {isFetching} >Log In</Button>
                        {error && <Error>Something went wrong...</Error>}
                        <Link>Forgot Password ?</Link>
                        <Link>Create A New Account</Link>
                    </Form>
                </FormBox>
            </Wrapper>
        </Container>
        </>
    )
}

export default Login;


