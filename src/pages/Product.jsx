import React, { useContext } from 'react'

import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcums from '../components/Breadcums/Breadcums'
import ProductDisplay from '../components/ProductDispay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'

const Product = () => {

    const all_products = useContext(ShopContext)
    const { productId } = useParams()
    const product = all_products.find((e) => e.id === Number(productId))
    return (
        <div className='product' >
            <Breadcums product={product}></Breadcums>
            <ProductDisplay product={product}></ProductDisplay>
            <DescriptionBox />
        </div>
    )
}

export default Product 
