import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/mens' element={<ShopCategory category="mens" />}></Route>
        <Route path='/womens' element={<ShopCategory category="womens" />}></Route>
        <Route path='/kids' element={<ShopCategory category="kids" />}></Route>
        <Route path='/product' element={<Product />} >
          <Route path=':productId' element={<Product />}> </Route>
        </Route>
        <Route path='/cart' element={<Cart />}> </Route>
        <Route path='/login' element={<LoginSignup />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
