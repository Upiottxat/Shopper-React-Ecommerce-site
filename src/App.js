import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer'
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png"
import kis_banner from "./components/Assets/banner_kids.png"
import toast from 'react-hot-toast'
const App = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />}></Route>
        <Route path='/kids' element={<ShopCategory banner={kis_banner} category="kid" />}></Route>
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
