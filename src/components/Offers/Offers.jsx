import React from 'react'
import "./Offers.css"
import exclusive_image from "../Assets/exclusive_image.png"
const Offers = () => {
    return (
        <div className='Offers'>

            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offer For You </h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div children='offers-right'>
                <img src={exclusive_image} width={window.innerWidth / 2}></img>
            </div>
        </div>
    )
}

export default Offers
