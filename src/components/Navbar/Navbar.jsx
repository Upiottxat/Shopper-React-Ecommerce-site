import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { cartData } = useCartContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>SHOPPER</p>
            </div>
            <button className='menu-btn' onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
                    {menu === "shop" ? <hr /> : <React.Fragment />}
                </li>
                <li onClick={() => { setMenu("mens"); setIsMenuOpen(false); }}>
                    <Link to="/mens" style={{ textDecoration: 'none' }}>Men</Link>
                    {menu === "mens" ? <hr /> : <React.Fragment />}
                </li>
                <li onClick={() => { setMenu("womens"); setIsMenuOpen(false); }}>
                    <Link to="/womens" style={{ textDecoration: 'none' }}>Women</Link>
                    {menu === "womens" ? <hr /> : <React.Fragment />}
                </li>
                <li onClick={() => { setMenu("kids"); setIsMenuOpen(false); }}>
                    <Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link>
                    {menu === "kids" ? <hr /> : <React.Fragment />}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart} alt='cart' /></Link>
                <div className='nav-cart-count'>
                    {cartData.length}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
