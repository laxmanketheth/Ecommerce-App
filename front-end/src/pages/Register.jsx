import styled from '@emotion/styled'
import React from 'react'
import mobile from '../responsive'
import Navbar from '../components/Navbar'

const Container = styled.div`
    height: 100vh;
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
        color:"transparent",
        backgroundColor: "#ecdfc8"
    })}
    `
const FormBox = styled.div`
    /* border: 1px solid green; */
    height: 450px;
    width: 40vw;
    background-color:rgb(216, 199, 169,0.5);
    margin-top: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${mobile({
        width:"90vw",
        height: "480px",
        border:"1px solid white",
        
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
    height: 350px;
    width: 400px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    ${mobile({
        height: "480px"     
    })}
    `
const Input = styled.input`
    background-color: rgb(255, 255, 255,0.8);
    outline: none;
    width: 75%;
    border-radius: 5px;
    height: 35px;
    padding-left:4px;
    ${mobile({
        width:"80vw",
        height:"46px",
    })}
    `
const Agreement = styled.span`
    text-align: center;
    ${mobile({
        width:"80vw"
    })}
    `
const Button = styled.button`
    background-color:black;
    color: #ecdfc8;
    width: 55%;
    height: 35px;
   &:hover{
    transform: translateY(-1px);
   }
   font-size: 22px;
   ${mobile({
        width:"90vw",
        height:"60px",
    })}
`

const Register = () => {

    return (
        <>
        <Navbar />
        <Container >
            <Wrapper>
                <Background>
                    LUXE.
                </Background>

                <FormBox>
                    <Title>Create an Account</Title>
                    <Form>
                        <Input placeholder='First_Name'></Input>
                        <Input placeholder='Last Name'></Input>
                        <Input placeholder='User_Name'></Input>
                        <Input placeholder='Email@'></Input>
                        <Input placeholder='Password'></Input>
                        <Input placeholder='Confirm_Password'></Input>
                        <Agreement>By creating an account, I agree to all the terms and conditions.</Agreement>
                        <Button>Create Account</Button>
                    </Form>
                </FormBox>
            </Wrapper>
        </Container>
        </>
    )
}

export default Register;

