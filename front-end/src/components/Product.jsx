import React, { useState } from 'react'
import styled from '@emotion/styled'
// import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import mobile from '../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
  /* flex: 1; */
  margin: 0 15px 15px;
  min-width: 280px;
  height: 350px;
  position: relative;
  background-color: rgb(236, 223, 200,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* border: 1px solid; */
`
const Image = styled.img`
  height: 75%;
  width: 90%;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
  opacity: 0;
  &:hover{
    opacity:1 ;
    transition: all 0.4s ease;
    cursor: pointer;
  }
  `

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover{
    transform: scale(1.1);
  }
`

const Product = ({ item }) => {
  // console.log( item);

  return (
    <Container>
      <Image src={item.img} />
      <Info>
           {/* <Icon>
              <ShoppingCartOutlinedIcon />
          </Icon> */}
          <Icon>
            <Link to={`/product/${item._id}`}> 
            {/* we are linking this to /product/:id path, where id is the id of current element  */}
              <SearchOutlinedIcon />
            </Link>
          </Icon>
           {/* <Icon>
              <FavoriteBorderOutlinedIcon />
          </Icon> */}
      </Info>

    </Container>
  )
}

export default Product;
