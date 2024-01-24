import React from 'react'
import styled from '@emotion/styled'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import mobile from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    background-color: black;
    color: #ecdfc8;
    border-bottom: 1px solid white;
    padding-top: 20px;
    ${mobile({
            flexDirection:"column",
            height:"420px",

    })}
`
const Left = styled.div`
    /* border: 1px solid; */
    margin-left: 20px;
    flex: 1;
    height: 100%;
    padding: 10px;
    ${mobile({
            paddingTop:"0px"
    })}
`
const Logo = styled.h1`
    font-weight:bold;
    `
const Text = styled.p``

const Center = styled.div`
/* border: 1px solid; */
    flex: 1;
    margin-left: 20px;
    height: 100%;
    padding: 10px;
    ${mobile({
            display:"none"
    })}
`
const Title = styled.h3`
    /* text-align: center; */
    margin-bottom: 10px;
`

const ListContainer = styled.ul`
    list-style: none;
    /* margin: 10px 200px;  */
`

const ListItems = styled.li`
&:hover{
        cursor: pointer;
    }`

const Right = styled.div`
/* border: 1px solid; */
    flex: 1;
    margin-left: 20px;
    height: 100%;
    padding: 10px;
    ${mobile({
            paddingTop:"0px"
    })}
`

const Contact = styled.div``
const Address = styled.div`
    display: flex;
    `
const Details = styled.p`
    padding-left: 10px;`

const PhoneNo = styled.div`
    display: flex;
`
const Number = styled.p`
    padding-left: 10px;
    `
const Email = styled.div`
    display: flex;
    ` 
const EmailAddress = styled.p`
    padding-left: 10px;
    `

const Footer = () => {
  return (
    <Container>
        
        <Left>
            <Logo>LUXE.</Logo>
             <Text>Shop with confidence at our E-commerce website, where quality meets affordability.
                 Discover a wide range of products curated just for you. Experience seamless shopping 
                 and swift delivery for a satisfying online shopping experience.
            </Text> 
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <ListContainer>
                <Link to= '/'>
                <ListItems>Home</ListItems>
                </Link>
                <Link to= '/aboutUs'>
                <ListItems>About us</ListItems>
                </Link>
                {/* <Link to='/products'>
                <ListItems>Products</ListItems>
                </Link> */}
                <Link to='/cart'>
                <ListItems>Cart</ListItems>
                </Link>
                <ListItems>Terms</ListItems>
            </ListContainer>
        </Center>
        <Right>
            <Contact>
            <Title>Contact</Title>
                <Address>
                    <LocationOnIcon/>
                    <Details>10/F, Tower2, SHAM MONG ROAD, KOWLOON, HONG KONG</Details>         
                </Address>
                <PhoneNo>
                    <PhoneInTalkIcon/>
                    <Number>85748754</Number>
                </PhoneNo>
                <Email>
                    <EmailIcon/>
                    <EmailAddress>luxe@gmail.com</EmailAddress>
                </Email>
                
            </Contact>
        </Right>
    </Container>
  )
}

export default Footer
