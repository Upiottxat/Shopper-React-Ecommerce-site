import React, { useContext } from 'react'
import "./css/shopCategory.css";
import { ShopContext } from '../context/ShopContext';
import dropdownIcon from "../components/Assets/dropdown_icon.png"
import Item from '../components/Items/Item';
const ShopCategory = (props) => {
    const all_products = useContext(ShopContext);

    return (
        <div className='ShopCategory'>
            <img src={props.banner} className='shopCategoryBanner' />
            <div className='shopCategoryIndexSort'>
                <p>
                    <span>Showing 1-12 </span> out of 36 products
                </p>
                <div className='shopCategorySort'>
                    Sort by <img src={dropdownIcon} />
                </div>
            </div>
            <div className='shopCategoryProducts'>
                {all_products.map((item, i) => {
                    if (props.category === item.category) {
                        return <div style={{
                            margin: '10px'
                        }}>
                            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}> </Item>
                        </div>

                    } else {

                    }
                })}
            </div>
            <div className='shopCategoryLoadMore'>
                Explore more
            </div>
        </div>
    )
}

export default ShopCategory
