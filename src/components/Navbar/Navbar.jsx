import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link to={"/"} style={{ textDecoration: 'none' }}>Shop</Link>   {menu === "shop" ? <hr /> : <React.Fragment />}</li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link to={"/mens"} style={{ textDecoration: 'none' }}>Men</Link> {menu === "mens" ? <hr /> : <React.Fragment />}</li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link to={"/womens"} style={{ textDecoration: 'none' }}>Women</Link> {menu === "womens" ? <hr /> : <React.Fragment />}</li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link to={"/kids"} style={{ textDecoration: 'none' }}>Kids</Link> {menu === "kids" ? <hr /> : <React.Fragment />}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to={"/login"}><button>login</button></Link>
                <Link to={"/cart"}><img src={cart}></img></Link>
                <div className='nav-cart-count'>
                    0
                </div>
            </div>

        </div>
    )
}

export default Navbar
