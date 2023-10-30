import React from 'react'
import styled from '@emotion/styled'
import mobile from '../responsive'
import { Link } from 'react-router-dom'



const Container = styled.div`
    flex: 1;
    /* border: 2px solid red; */
    margin-top: 15px;
    height: 350px;
    position: relative;
    background-color: rgb(246, 242, 242);
    ${mobile({
        marginTop:"8px"
    })}
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    ${mobile({
        height:"25vh",
        objectFit:"cover"
        })}
    `
const Info = styled.div`
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({
        top:"100px"
    })}
`
const Title = styled.h1`
    font-size: 25px;
    font-weight: 600;
    color: white;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
`
const Button = styled.button`
    padding: 5px;
    background-color: transparent;
    border: 2px solid white;
    font-weight: bold;
    color: white;
    &:hover{
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.3);
    color: #1b1919;
    };
`

const CategoryItem = ({item}) => { //we are receiving item object as a prop from Categories
  return (
    <Container>
        <Link to= {`/products/ ${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem;
