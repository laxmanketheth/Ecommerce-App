import React from 'react'
import styled from '@emotion/styled'
import mobile from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 30px;
    /* border: 2px solid lightgray; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4dbcb;
    font-weight: bold;
    font-size: 15px;
    border-bottom: 1px solid lightgray;
    margin-top: 60px;
    ${mobile({
              fontSize:"10px",
              height: "35px",
              marginTop: "50px"         
    })}
`

const Announcement = () => {
  return (
    <Container>
      Yayy! Enjoy Shopping with Luxe. Start your amazing shopping experience now.
    </Container>
  )
}

export default Announcement
