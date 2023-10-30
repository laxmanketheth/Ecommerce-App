import React from 'react'
import styled from '@emotion/styled'
import SendIcon from '@mui/icons-material/Send';
import mobile from '../responsive';

const Container = styled.div`
    height: 300px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(246, 242, 242);
`
const Heading = styled.h1`
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 2px;
`
const Description = styled.p`
    font-size: 30px;
`
const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Input = styled.input`
    width: 29%;
    height: 38px;
    padding-left:5px;
    outline: none;
    border-radius: 0px;
    border: 1px solid lightgray;
    ${mobile({
            width:"70%"
    })}
`
const Button = styled.button`
    width: 70px;
    color: white;
    background-color: teal;
    border: 2px solid gray;
`



const Newsletter = () => {
  return (
    <Container>
        <Heading>Newsletter</Heading>
        <Description>
            Get latest updates from us
        </Description>
        <InputBox>
            <Input></Input>
            <Button>
                <SendIcon />
            </Button>
        </InputBox>
    </Container>
  )
}

export default Newsletter
