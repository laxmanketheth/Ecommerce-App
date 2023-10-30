import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import mobile from '../responsive'
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div``

const Wrapper = styled.div`
    /* border: 2px solid; */
    display: flex;
    margin: 80px;
    ${mobile({
    flexDirection: "column",
    margin: "0px"
})}
    `
const ImgContainer = styled.div`
    /* border: 2px solid blue; */
    width: 100%;
    display: flex;
    justify-content: center;
    ${mobile({
    width: "100%",
    margin: "5px 0px",
    // border:"1px solid red"
})}
    `
const Image = styled.img`
    height:400px;
    ${mobile({
    width: "100%",
})}
    `
const InfoContainer = styled.div`
        /* border: 2px solid blue; */
        width: 50%;
        padding: 20px 40px;
        ${mobile({
    width: "100%",
    padding: "10px",
    paddingBottom: "20px"
})}
    `

const Title = styled.h1`
    font-weight: lighter;
    font-size: 40px;
    letter-spacing: 2px;
    `
const Text = styled.p`
    font-size: 17px;
    `
const Price = styled.span`
    font-size: 35px;
    word-spacing: 3px;
    `

const FilterContainer = styled.div`
    display: flex;
    /* border: 1px solid; */
    padding: 10px 0;
    `
const Filter = styled.div`
    display: flex;
    margin-right: 60px;
    margin-top: 10px;
    `

const FilterTitle = styled.h5`
    margin-right: 10px;
    `
const FilterColor = styled.div`
    height: 20px;
    width: 20px;
    background-color: ${props => props.color};
    border-radius: 50%;
    margin-right: 5px;
    &:hover{
        cursor: pointer;
    }
    `
const FilterSize = styled.select`
    outline: none;
    width: 50px;
    height: 25px;
    &:hover{
        cursor: pointer;
    }
    `
const SizeOption = styled.option`
    text-align: center;
    `

const AddContainer = styled.div`
    /* border: 1px solid; */
    display: flex;
    align-items: center;
    margin-top: 10px;
`
const AmountContainer = styled.div`
    margin-right: 70px;
    `
const Amount = styled.span`
    border: 2px solid gray;
    padding: 3px 6px;
    border-radius: 30%;
    margin: 5px;
    `

const StyledRemoveSharpIcon = styled(RemoveSharpIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledAddSharpIcon = styled(AddSharpIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
    height: 40px;
    width: 200px;
    border: 2px solid lightgray;
    background-color: transparent;
    &:hover{
        background-color: rgb(211, 211, 211,0.3);
        border: 2px solid gray;
    }
    `


const Product = () => {

    const location = useLocation() //this hook gives us various properties including
                                 // the pathname property that represents the current URL path
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    // console.log(product);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                //we have created axios request in requestMethods.js file and used it here
                setProduct(res.data);
                // console.log(res.data)               
            } catch { }
        };
        getProduct()      
    }, [id]);
    // console.log(product);

    const decrease = () => {
        quantity >1 && setQuantity(quantity - 1)
        //we have kept a condition here so that the quantity of products doesnt go in negative
    };

    const increase = () => {
        setQuantity(quantity + 1)
    };


    const handleClick = () => {
        // console.log("addproduct")
        dispatch(
           
            addProduct({ ...product, quantity, color, size })
        )
        // console.log(quantity);
    };
   

    return (
        <Container>

            <Navbar />
            <Announcement />

            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>

                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Text> {product.desc}
                    </Text>
                    <Price>$ {product.price}</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color && product.color.map((c) => (
                                        <FilterColor color={c} key={c} onClick={() =>setColor(c) } />
                                ))}                           
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                            {product.size && product.size.map((s) => (
                                        <SizeOption key={s}>{s}</SizeOption>
                                ))}                    
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            {/* <StyledRemoveSharpIcon  onClick={()=> handleQuantity("dec")} /> */}
                            <StyledRemoveSharpIcon onClick={decrease} />
                            <Amount>{quantity}</Amount>
                            {/* <StyledAddSharpIcon  onClick={()=> handleQuantity("inc")} /> */}
                            <StyledAddSharpIcon onClick={increase} />
                        </AmountContainer>
                        <Button onClick={handleClick}> ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product;
