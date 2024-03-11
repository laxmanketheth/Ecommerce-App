import React from 'react'
import styled from '@emotion/styled'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import DiscountIcon from '@mui/icons-material/Discount';
import mobile from '../responsive';



// all css //
const Container = styled.div`
    height: 90%;  //dont change//
    width: 100%;  //dont change//
    display: flex;
    background-color: #ecdfc8;
    ${mobile({display: "none"})}
`

const Slide = styled.div`
  width: 100vw;  //dont change//
  height: 90vh;  //dont change//
  /* border: 2px solid ; */
  display: flex;
  align-items: center;
`

// css for image//

const ImageContainer = styled.div`
  flex:1;
`
const Image = styled.img`
  height: 90vh; //dont change//
  margin-left: 30%;
`

// css for text// 

const InfoContainer = styled.div`
  flex: 1;
  height: 200px;
  margin-right: 30px;
  letter-spacing: 3px;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
`
const Text = styled.p`
  width: 550px;
  font-size: 16px;
  letter-spacing: 2px;
  /* font-weight:  bold; */
  margin: 35px 0px;
`
const Button = styled.button`
  padding: 5px 35px;
  font-size: 20px;
  background-color: transparent;
  font-weight: bold;
  &:hover{
    background-color:rgba(169, 118, 70, 0.3);
    color: white;
    transform: translateY(-2px);
    border:2px solid white
  }
`

function Slider() {
  return (
    <Container>
      <Carousel style={{width:'100%'}} interval={2000}>
        <Carousel.Item>
          <Slide>
            <ImageContainer>
              <Image src="/images/pexels-renthel-cueto-7505254.jpg" alt="First slide" />
            </ImageContainer>
            <InfoContainer>
              <Title>Shop your style</Title>
              <Text>NOW YOU CAN SHOP YOUR FAVOURITE STYLES WITH US WITH ALMOST HALF THE PRICE.</Text>
              {/* <Button>shop now</Button> */}
            </InfoContainer>
          </Slide>
        </Carousel.Item>

        <Carousel.Item>
          <Slide>
            <ImageContainer>
              <Image src="/images/pexels-natasha-cocco-12746779.jpg" alt="First slide" />
            </ImageContainer>
            <InfoContainer>
              <Title>Go Bold with Fashion</Title>
              <Text>EXPLORE OUR COLLECTION OF DARING FASHION CHOICES AND SHOP CONFIDENTLY.</Text>
              {/* <Button>shop now</Button> */}
            </InfoContainer>
          </Slide>
        </Carousel.Item>

        <Carousel.Item>
          <Slide>
            <ImageContainer>
              <Image src="/images/pexels-godisable-jacob-914668.jpg" alt="First slide" />
            </ImageContainer>
            <InfoContainer>
              <Title>Big Discounts <DiscountIcon style={{fontSize:'40px'}}/>  </Title>
              <Text> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Text>
              {/* <Button>shop now</Button> */}
            </InfoContainer>
          </Slide>
        </Carousel.Item>



      </Carousel>
    </Container>
  );
}

export default Slider;





