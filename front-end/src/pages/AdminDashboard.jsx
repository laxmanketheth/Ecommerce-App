
import React from 'react'
import styled from '@emotion/styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../redux/apiCalls';
import Navbar from '../components/Navbar'

import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';
import { Link } from 'react-router-dom';



const Container = styled.div`
    /* border: 2px solid; */
    margin-top: 50px;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    /* padding-top: 30px; */
    margin: 30px;

`
const TopText = styled.div` 
    `
const Text = styled.div`
 background-color: lightgray;
    height: 50px;
    text-align: center;
    padding: 15px;
    font-size: 22px;
    `;

const ProductsTable = styled.div`
    /* height: 62vh; */
    width: 90vw;
    border: 4px solid lightgray;
`;
const Buttons = styled.td`
    background: #fff7e8;
    height: 115px;
    border: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
`;

const Button = styled.button`
    width: 40px;
    margin: 0px 20px;
    height: 25px;
    background-color: #f66b08;
    color: whitesmoke;
    border-radius: 20%;
    border: none ; 
`;
const AddButton = styled.button`
    margin-left: 70%;
    width: 220px;
    height: 50px;
    background-color: green;
    color: whitesmoke;
    border: 4px solid darkgreen;
    /* font-weight: bold; */
`;


const AdminDashboard = () => {

    const { products } = useSelector((state) => state.product)
    const {currentUser} = useSelector((state) => state.user)
    //we are destructuring user and getting only currentUser from
    // it that is received to us from userRedux or userSlice using useSelector hook;

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts(dispatch);
    }, [dispatch])

    const handleDelete = (id) => {
        deleteProduct(id, dispatch)
    }

    return (

        <>
        <Navbar />
        <Container>
            <Wrapper>

                <TopText>
                    <Text style={{
                        backgroundColor: 'lightgray',
                        // textAlign: 'left',
                        fontWeight: 'bold'
                    }} >Welcome Back {currentUser.username} </Text>
                    <hr />
                    <Text>Products Available in the Store</Text>
                    <Link to= '/newproduct'>
                        <AddButton>Add New Product</AddButton>
                    </Link>
                    
                </TopText>

                <ProductsTable>

                    <TableContainer component={Paper} sx={{ maxHeight: '60vh' }}>
                        <Table aria-label='product-table' stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {/* <TableCell>Id</TableCell> */}
                                    <TableCell style={{ width: '1%' }}>Product Image</TableCell>
                                    <TableCell >Product Name</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Price</TableCell> 
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    products.map((item) => {
                                        // console.log(item);
                                        return <TableRow key={item._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            {/* <TableCell>{item._id}</TableCell> */}
                                            <TableCell><img src={item.img}
                                                alt='Product image'
                                                style={{
                                                    height: '80px',
                                                    width: '80px'
                                                }}
                                            />
                                            </TableCell>
                                            <TableCell>{item.title}</TableCell>
                                            <TableCell>{item.categories}</TableCell>        
                                            <TableCell>$ {item.price}</TableCell>

                                            <Buttons>
                                                {/* <Button>Edit</Button> */}
                                                <DeleteForeverIcon onClick={() => handleDelete(item._id)} style={{ fontSize: '35px', color: '#d30d0d', marginRight: '10px', cursor: 'pointer' }} />
                                            </Buttons>


                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>


                </ProductsTable>
            </Wrapper>
        </Container>

        </>
    )
};

export default AdminDashboard;
