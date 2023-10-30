import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Product from './Product'
import mobile from '../responsive';
import axios from "axios";

const Container = styled.div`
  padding :20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* border: 2px solid red; */
  ${mobile({
          marginTop:"80px",
          display:"flex",
          justifyContent:"center",
          padding:"10px"
  })}
`;


const Products = ({cat, filters, sort}) => {
  // receiving above props from ProductsList in pages folder
  // console.log(cat,filters,sort);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
      const getProducts = async () =>{
        try{
          const res = await axios.get(
           cat
               ? `http://localhost:8080/api/products?category=${cat}` 
               : "http://localhost:8080/api/products"
               );
          
          //  console.log(res);
          setProducts(res.data);  
        }catch(err){}
      };
      getProducts()
    },[cat]);


    useEffect(() => {
        cat && setFilteredProducts(
          products.filter(item => 
            Object.entries(filters).every(([key,value]) =>
              item[key].includes(value)
            ))
        )
    }, [products, cat, filters]);


    useEffect(()=>{
      if(sort === "newest"){
        setFilteredProducts(prev =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
      }else if  (sort === "asc"){
        setFilteredProducts((prev) =>
          [...prev].sort((a,b) => a.price - b.price)
          );
      }else{
          setFilteredProducts((prev) =>
            [...prev].sort((a,b) => b.price - a.price)
            );
        
      }
    },[sort])

  return (
    <Container>
      {cat 
        ? filteredProducts.map((item)=> <Product item = {item} key={item.id}/>)      
        : products
              .slice(0, 8)
              .map((item)=> <Product item = {item} key={item.id}/>)
      }
    </Container>
  );
};

export default Products;

//we are mapping over the popularProducts array from data.js file &
  //rendering Product component for each item in that array//
 //item object is passed as a prop to each Product
    //we are mapping over the popularProducts array from data.js file &
      //rendering Product component for each item in that array//
