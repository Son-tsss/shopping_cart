import React from 'react'
import Coupon from './coupon'

const Product = ({id, price, info}) => {
    return <div className="product">
        <p>{info.name}</p>
        <p>{price}</p>
    </div>
}

export default Product