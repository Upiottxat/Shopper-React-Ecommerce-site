import React from 'react'
import PropTypes from 'prop-types'
import "./item.css"
const Item = props => {
    return (
        <div className='Item' key={props.key}>
            <img src={props.image}></img>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    $ {props.new_price}
                </div>
                <div className='item-price-old'>
                    $ {props.old_price}
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {


}

export default Item
