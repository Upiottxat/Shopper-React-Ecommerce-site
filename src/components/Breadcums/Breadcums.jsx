import React from 'react'
import "./BreadCums.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"
const Breadcums = (props) => {
    const { product } = props;

    return (
        <div className='Breadcums'>
            HOME <img src={arrow_icon} />SHOP <img src={arrow_icon} />{product.category}<img src={arrow_icon} />{product.name}
        </div>
    )
}

export default Breadcums
