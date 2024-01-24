import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from '@emotion/styled'

const Heading = styled.h1`
    text-align: center;
    margin-bottom: 40px;
`

const Container = styled.div`
    /* height: 300px; */
    margin: 100px;
    padding: 60px;
    background-color: bisque;
    font-size: 20px;
    /* width: ; */
`


const AboutUs = () => {
    return (
        <div>
            <Navbar />
            
            <Container>
                <Heading>Welcome to Luxe</Heading>
            <p>"Welcome to our e-commerce store! At Luxe, we are passionate about providing an exceptional
                 online shopping experience. With a wide range of products from various categories, we aim to fulfill
                  your every shopping need. Our carefully curated collection features high-quality items from trusted brands, 
                  ensuring that you find exactly what you're looking for. We prioritize customer satisfaction and strive to exceed 
                  your expectations with seamless browsing, secure transactions, and prompt delivery. Whether you're searching for fashion,
                   electronics, home essentials, or gifts, we've got you covered. Join our community of satisfied customers and embark on a 
                   delightful shopping journey with Luxe."
            </p>
           
            </Container>
            <Footer />
        </div>
    )
}

export default AboutUs
