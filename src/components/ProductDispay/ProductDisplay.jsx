import React, { useState } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import useCart from '../../hooks/useCart';

const ProductDisplay = (props) => {
    const product = props.product;
    const [Quanity, setQuanity] = useState(1);
    const [Size, setSize] = useState("M");
    const { addToCart } = useCart()
    const handleQuantity = (e) => {
        setQuanity(Number(e.target.value))
    }

    const addItemToCart = () => {

        product.quantity = Quanity;
        product.size = Size;
        product.price = product.new_price
        addToCart(product)
    }
    return (
        <div className='ProductDisplay '>
            <div className='ProductDisplayLeft'>
                <div className='ProductDisplay_ImageList'>
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className='ProductDisplay_Image'>
                    <img src={product.image} className='ProductDispay_mainImg' />
                </div>
            </div>
            <div className='ProductDisplayRight'>
                <h1>{product.name}</h1>
                <div className='ProductDispay_rightStart'>
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_dull_icon} />
                    <p>(122)</p>
                </div>

                <div className='ProductDispay_rightPrices'>
                    <div className='old_price'>₹{product.old_price}</div>
                    <div className='new_price'>₹{product.new_price}</div>
                </div>
                <div className='ProductDispay_rightDescription'>
                    {product.hasOwnProperty('desciption') ? product.desciption : "lorem ipsum dolor sit amet, con et non proident et ullamco labor e  quis nostrud et ullamco labor e quis nostrud et ullamco labor e quis nostr ut aliqu      et aliquet et ullamco labor e quis nostrud et ullam co labor e quis nostrud et ullam co labor e quis nostrud et ullam co labor e quis nostrud et ullam co labor e qu    is nostrud et u"}
                </div>



                <div className='Size'>
                    <h1>Select Size</h1>
                    <div className='Sizes'>
                        <div style={{ background: Size === "S" ? "#0dcaf0" : "#fbfbfb", color: Size === "S" ? "white" : "#212529" }} onClick={() => { setSize("S") }}>S</div>
                        <div style={{ background: Size === "M" ? "#0dcaf0" : "#fbfbfb", color: Size === "M" ? "white" : "#212529" }} onClick={() => { setSize("M") }}>M</div>
                        <div style={{ background: Size === "L" ? "#0dcaf0" : "#fbfbfb", color: Size === "L" ? "white" : "#212529" }} onClick={() => { setSize("L") }}>L</div>
                        <div style={{ background: Size === "XL" ? "#0dcaf0" : "#fbfbfb", color: Size === "XL" ? "white" : "#212529" }} onClick={() => { setSize("XL") }} >XL</div>
                        <div style={{ background: Size === "XXL" ? "#0dcaf0" : "#fbfbfb", color: Size === "XXL" ? "white" : "#212529" }} onClick={() => { setSize("XXL") }}  >XXL</div>
                    </div>
                </div>
                <div className='Quanity'>
                    <h1>Quanity</h1>
                    <div className='QuanityBtn'>
                        <button className='minus' onClick={() => { Quanity <= 1 ? setQuanity(Quanity) : setQuanity(Quanity - 1) }}><i className='fa fa-minus'></i></button>
                        <input type='text' value={Quanity} onChange={handleQuantity}></input>
                        <button className='plus' onClick={() => { setQuanity(Quanity + 1) }}><i className='fa fa-plus'></i></button>
                    </div>
                </div>
                <button className='addToCart' onClick={addItemToCart}>ADD TO CART</button>
                <p className='category'></p>
                <p className='tags'></p>
            </div >
        </div >
    )
}

export default ProductDisplay
