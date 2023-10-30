import React from 'react';
import styled from '@emotion/styled';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import mobile from '../responsive'; //importing the mobile function from responsive.js file//
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';
import { clearCart } from '../redux/cartRedux';
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    width: 100%;
    background-color: black;
    color: #ecdfc8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:999;
    ${mobile({
    height: "50px", width: "100vw", position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999
})} //for responsiveness
 
`
const Wrapper = styled.div`
    padding: 10px 20px ;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({
    padding: "10px 3px",
    // overFlow:"hidden"
})}
`

const Left = styled.div`
  flex: 1;    //this property here means that this current div
                // is one unit in size of the parent div//
  display: flex;
  align-items: center;
   ${mobile({ flex: 1 })}
`
// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;
// `
const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    padding: 3px;
    background-color: #ecdfc8;
    width: 350px;
    margin-bottom: 6px;
    ${mobile({
    width: "145px",
    padding: "0px"
})}
`
const SearchBar = styled.input`
    border : none ; 
    width :350px;
    background-color: #ecdfc8;
    padding-left: 3px;
    &:focus{
        outline: none  //for removing the outline inside input field//
    };
    ${mobile({ width: "120px" })}
`

const Center = styled.div`
   flex: 1;
   text-align: center;
   display: flex;
   justify-content: center;
   ${mobile({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 3px"
})}  
`
const LogoDiv = styled.div`
    width: 150px;
    ${mobile({ width: "100px" })}
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 3px;
    color: #ecdfc8;
    /* font-size: 40px; */
`;

const LogoLink = styled(Link)`
  text-decoration: none;  
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px;
    ${mobile({
    flex: 2,
    padding: "5px",
    fontSize: "10px",
    justifyContent: "start"
})}
`;

const Register = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
    ${mobile({
    marginRight: "5px",
    fontSize: "13px"
})}
    text-decoration: none;

`
const Login = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
    ${mobile({
    marginRight: "5px",
    fontSize: "13px"
})}
    text-decoration: none;
`;

const Logout = styled.span`
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    margin-right: 30px;
`;


const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)
    // console.log(quantity);
    const { currentUser } = useSelector((state) => state.user)
    // const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        dispatch(clearCart())
        navigate('/')

    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language>EN</Language> */}
                    <SearchContainer>
                        <SearchBar placeholder='Search' />
                        <SearchIcon style={{ color: 'grey', fontSize: 20, cursor: 'pointer', marginLeft: '3px' }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <LogoLink to="/">
                        <LogoDiv><Logo>LUXE.</Logo></LogoDiv>
                    </LogoLink>
                </Center>

                <Right>
                    {currentUser
                        ? (<>
                            <Logout onClick={handleLogout}>Logout</Logout>
                            <Link to="/cart">
                                <Badge badgeContent={quantity} color="error">
                                    <ShoppingCartOutlinedIcon style={{ fontSize: 20, cursor: 'pointer' }} />
                                </Badge>
                            </Link>
                          </>)

                        : (
                            <> <Link to="/register">
                                <Register>Register</Register>
                            </Link>

                                <Link to="/login">
                                    <Login>Login</Login>
                                </Link>
                            </>
                        )}
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar;
