import { useState } from 'react' 
import './App.css'
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import {BrowserRouter,Route, Routes,Navigate} from 'react-router-dom'
import Products from './components/Products'
import Success from './pages/Success'
import { useSelector } from 'react-redux'
import AdminDashboard from './pages/AdminDashboard'
import NewProduct from './pages/newProduct/NewProduct'





function App() {
 
    const user = useSelector(state => state.user.currentUser)
    
  return (

    <Routes>
    
      <Route path='/' element= {<Home />}/>
      <Route path='/products/:category' element= {<ProductsList />}/>
      <Route path='/product/:id' element= {<Product />}/>
      <Route path='/cart' element= {<Cart />}/>
      <Route path='/success' element= {<Success />}/>
      <Route path='/login' element= {user ? <Navigate to= "/"/> : <Login/> }/>
      <Route path='/register' element= {user ? <Navigate to= "/"/> : <Register/> }/>
      <Route path='/dashboard' element={<AdminDashboard/>}/>
      <Route path= '/newproduct' element={<NewProduct />} />
      
    </Routes>

  )
};

export default App;
