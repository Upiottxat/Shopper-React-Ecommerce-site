import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { useAuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { cartData } = useCartContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { authUser } = useAuthContext();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>SHOPPER</p>
            </div>

            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => { setMenu("mens"); setIsMenuOpen(false); }}>
                    <Link to="/mens" style={{ textDecoration: 'none' }}>Men</Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => { setMenu("womens"); setIsMenuOpen(false); }}>
                    <Link to="/womens" style={{ textDecoration: 'none' }}>Women</Link>
                    {menu === "womens" && <hr />}
                </li>
                <li onClick={() => { setMenu("kids"); setIsMenuOpen(false); }}>
                    <Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>

            <div className='nav-login-cart'>
                <Link to="/cart"><img src={cart} alt='cart' /></Link>
                <div className='nav-cart-count'>
                    {cartData.length}
                </div>
                <Link to="/login">
                    <button><i className='fa fa-user'></i>{authUser ? authUser.fullName.split(' ')[0] : "Login"}</button>
                </Link>
            </div>

            <button className='menu-btn' onClick={toggleMenu}>
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
        </div>
    );
};

export default Navbar;
