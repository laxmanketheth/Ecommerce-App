import React, { useState } from 'react'
import styled from '@emotion/styled'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import mobile from '../responsive'
import { useLocation } from 'react-router-dom'


const Container = styled.div``
const Title = styled.h3`
    margin: 15px 50px;
    font-weight: bold;
    letter-spacing: 1px;
    ${mobile({
        //  border: "2px solid",
         margin:"10px 18px",
         fontSize:"25px"
        })}
    
`

const FilterContainer = styled.div`
  /* border: 2px solid; */
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 30px;
  ${mobile({
            // border:"1px solid",
            height: "130px",
            padding:"4px 10px",
            alignItems:"start"
        })}
  `

const Filter = styled.div`
    margin: 20px;
    ${mobile({
            // border:"1px solid",
            margin:"7px",
            display:"flex",
            flexDirection:"column"
        })}
    `
const FilterText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #5d5b5b;
    `
const Select = styled.select`
    width: 110px;
    height: 30px;
    outline: none;
    margin: 0 5px;
    ${mobile({
            height:"30px",
            width:"110px",
            marginTop:"8px"
    })}
`
const Option = styled.option`
 ${mobile({
            height:"10px",
            width:"10px",
            // margin:"4px"
    })}
    `


const ProductsList = () => {

    const location = useLocation() //this hook gives us various properties including
                        // the pathname property that represents the current URL path
    const cat = location.pathname.split("/")[2]

    const [filters, setFilters] =useState({});
    const [sort, setSort] =useState("newest")

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        });
    };
    // console.log(filters);

    return (
        <Container>
            <Navbar />
            <Announcement />

            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter : </FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>

                    <Select name='size' onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort : </FilterText>
                    <Select onChange={ (e) => setSort(e.target.value)}>
                        <Option value= "newest">Newest</Option>
                        <Option value= "asc">Price(Asc) </Option>
                        <Option value= "desc">Price(Desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>

            <Products cat= {cat} filters= {filters} sort= {sort} /> 
            {/* we are passing all the set values as props to Products component */}
           
           <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductsList;
