import React from 'react'
import PropTypes from 'prop-types'

const ProductInfo = ({id, price, finalPrice, name}) => {
    return <div className="shopping-cart-item-info">
        <p className="shopping-cart-item-name">{name}</p>
        <p className="shopping-cart-item-id">{id}</p>
        <span className={`shopping-cart-item-price${finalPrice < price ? " shopping-cart-item-price__stroked" : ""}`}>
            ${price}
        </span>
        {
            finalPrice < price && <span className="shopping-cart-item-new-price">${finalPrice}</span>
        }
    </div>
}

ProductInfo.propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    finalPrice: PropTypes.number.isRequired
}

export default ProductInfo