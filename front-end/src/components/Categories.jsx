import React from 'react';
import styled from '@emotion/styled';
import {categories} from '../data';
import CategoryItem from './CategoryItem';
import mobile from '../responsive';



const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0;
height: 70vh;
width: 100%;                                  
${mobile({
      padding:"0px",
      flexDirection: "column"
})}
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item =>( //we are mapping over the categories array from data.js file &
                    //rendering CategoryItem component for each item in that array//
        
          <CategoryItem item = {item} key={item.id}/> 
          //item is passed as a prop to each CategoryItem
        ))}
    </Container>
   
  )
}

export default Categories;
