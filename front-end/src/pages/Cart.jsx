import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import AddSharp from '@mui/icons-material/AddSharp';
import RemoveSharp from '@mui/icons-material/RemoveSharp';
import mobile from '../responsive';
import { useSelector,useDispatch } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from '../requestMethods';
import { useNavigate, Link } from 'react-router-dom';
// import {removeProduct} from '../redux/cartRedux';
import { current } from '@reduxjs/toolkit'
// import Product from './Product'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { fontSize } from '@mui/system'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

//getting the VITE_REACT_APP_STRIPE from .env.local file//
const KEY = import.meta.env.VITE_REACT_APP_STRIPE;

const Container = styled.div``
const Wrapper = styled.div`
    padding:20px;
    ${mobile({
    padding: "10px"
})}
    `
const Title = styled.h2`
    font-weight: 300;
    text-align: center;
    `
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px ;
    ${mobile({
    // border :"1px solid",
    padding: "5px 0px",
})}
`
const TopButton = styled.button`
    padding: 6px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props => props.type ? "black" : "white"};
    color: ${props => props.type === "filled" && "white"};
    border: ${props => props.type === "filled" && "none"};
    `
const TopTexts = styled.div`
     ${mobile({
    display: "none"
})}
    `

const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0 10px;
    `
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: lightgray; */
    ${mobile({
    flexDirection: "column",
    //    border:"1px solid red"
})}
    `
const Info = styled.div`
    flex: 3;
    /* border: 1px solid; */
    `

const Product = styled.div`
   display: flex;
   justify-content: space-between;
   /* border:1px solid; */
   margin-bottom: 5px;    //added later//
   ${mobile({
    flexDirection: "column",
    //    border:"1px solid red"
})}
    `
const ProductDetails = styled.div`
    flex:2;
    display: flex;
    /* border:1px solid; */
    `
const Image = styled.img`
    width: 200px;
    height: 150px;
    object-fit: contain;
    `

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `

const ProductName = styled.span``

const ProductID = styled.span``

const ProductColor = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.color};
    `

const ProductSize = styled.span``

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: 1px solid lightgrey; */
    /* background-color: lightgray; */
    ${mobile({
    border: "1px solid lightgrey",
    marginTop: "2px"
})}
    `

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    /* margin-bottom: 20px; */
    `
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 3px;
    `
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    `
const Hr = styled.hr`
    width: 90%;
    height: 1px;
    background-color: gray;
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 58vh;
    background-color: lightgray;
    ${mobile({
    flexDirection: "column",
    //    border:"1px solid blue",
    marginTop: "10px",
    padding: "8px"
})}
    `

const SummaryTitle = styled.h3``

const SummaryItem = styled.div`
    margin: 12px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "bold"};
    font-size:  ${props => props.type === "total" && "18px"};
    `

const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 3px;
    background-color: black;
    color: wheat;
    font-weight: bold;
    `;

const EmptyCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    /* border: 1px solid; */
    `;

const Text = styled.div`
    /* border: 2px solid red; */
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 80px;
    letter-spacing: 3px;
    color: brown;
`;

const BackButton = styled.button`
    background-color: black;
    color: wheat;
    border: none;
    padding: 10px;
    margin-left: 30px;

`;

const RemoveItem = styled.button`
    padding: 2px 8px ;
    margin-top: 5px;
    background-color: black;
    color: wheat;
    letter-spacing: 0.5px;
`;

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    // console.log(cart);
    // const {products} = useSelector((state) => state.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();
    // const { currentUser } = useSelector((state) => state.user);

    // const dispatch = useDispatch();

    // const handleRemoveItem = (id) =>{
    //     dispatch(removeProduct(id))
    // };

    const onToken = (token) => {
        setStripeToken(token);
    };


    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                });
                // console.log(res);
                navigate("/success",
                    {
                        stripeData: res.data,
                        products: cart
                    });
            } catch {}
        };
        stripeToken && cart.total >= 1 && makeRequest();
    }, [stripeToken, cart.total, navigate]);

    // console.log(stripeToken);

    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                { cart.products.length > 0 ?
                    <>
                        <Title>YOUR BAG</Title>

                        <Top>
                            <TopButton>CONTINUE SHOPPING</TopButton>

                            <TopTexts>
                                <TopText>Shopping Bag(2)</TopText>
                                {/* <TopText>Your Wishlist(0)</TopText> */}
                            </TopTexts>
                            <TopButton type='filled'>CHECKOUT NOW</TopButton>
                        </Top>

                        <Bottom>
                            <Info>
                                {cart.products.map((product) => (
                                    <Product>
                                        <ProductDetails>
                                            <Image src={product.img} />
                                            <Details>
                                                <ProductName><b>Product : </b> {product.title} </ProductName>
                                                <ProductID><b>ID : </b> {product._id} </ProductID>
                                                <ProductColor color={product.color} />
                                                <ProductSize><b>Size : </b> {product.size} </ProductSize>
                                            </Details>
                                        </ProductDetails>
                                        
                                        <PriceDetails>
                                            <ProductAmountContainer>
                                                <AddSharp />
                                                <ProductAmount>{product.quantity}</ProductAmount>
                                                <RemoveSharp />
                                            </ProductAmountContainer>
                                            <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                            {/* <RemoveItem onClick={() => handleRemoveItem(product._id)}>Remove from Cart</RemoveItem> */}
                                        </PriceDetails>
                                    </Product>
                                ))}

                                <Hr />


                            </Info>
                            <Summary>
                                <SummaryTitle>Order Summary</SummaryTitle>
                                <SummaryItem>
                                    <SummaryItemText>Subtotal</SummaryItemText>
                                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                                </SummaryItem>

                                <SummaryItem>
                                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                                    <SummaryItemPrice>$ 5</SummaryItemPrice>
                                </SummaryItem>

                                <SummaryItem>
                                    <SummaryItemText>Shipping Discount</SummaryItemText>
                                    <SummaryItemPrice>$ -5</SummaryItemPrice>
                                </SummaryItem>

                                <SummaryItem type="total">
                                    <SummaryItemText>Total</SummaryItemText>
                                    <SummaryItemText>$ {cart.total}</SummaryItemText>
                                </SummaryItem>


                                <StripeCheckout
                                    name="LUXE."
                                    // image = "./src/logo/logoimg.png"
                                    image="https://tse2.mm.bing.net/th?id=OIP.tyc__y36d89lgXqxJFBKxAHaHa&pid=Api&P=0&h=220"
                                    billingAddress
                                    shippingAddress
                                    description={`Your total is $ ${cart.total} `}
                                    amount={cart.total * 100} //we multiply wih 100 because works with cents//
                                    token={onToken}
                                    stripeKey={KEY}
                                >
                                    <Button>CHECKOUT NOW</Button>
                                </StripeCheckout >

                            </Summary>
                        </Bottom>

                    </>
                    
                    :
                     <EmptyCart>
                        <Text>your Cart is empty <SentimentVeryDissatisfiedIcon style={{ fontSize: '80px', color: "brown" }} /> </Text>
                        <Link to="/">
                            <BackButton> CONTINUE SHOPPING </BackButton>
                        </Link>

                      </EmptyCart>
                    }
            </Wrapper>

            <Footer />

        </Container>
    )
}

export default Cart;
