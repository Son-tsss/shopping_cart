import React from 'react'
import PropTypes from 'prop-types'

const ProductInfo = ({id, price, name}) => {
    return <div className="product-info">
        <p className="product-info-name">{name}</p>
        <p className="product-info-id">{id}</p>
        <p className="product-info-price">${price}</p>
    </div>
}

ProductInfo.propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default ProductInfo