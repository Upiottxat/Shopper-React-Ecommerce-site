import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsApp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer-logo'>
                <img src={footer_logo} />
                <p>SHOPPER</p>

            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contract</li>
            </ul>
            <div className='footer-social-icons'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt='' />
                </div>
                <div className='footer-icons-container'>
                    <img src={pintrest_icon} alt='' />
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsApp_icon} alt='' />
                </div>
            </div>
            <div className='footer-copyright'>
                <hr>
                </hr>
                <p>Copyright @2024 -- All right reserved</p>
            </div>
        </div>
    )
}

export default Footer
