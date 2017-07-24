import React from 'react'
import PropTypes from 'prop-types'

import PictureCard from '../picture_card'
import ProductInfo from './product_info'

const Product = ({id, price, info, add}) => {
    const {name, img} = info

    const handleAddClick = () => {
        add({id, price, info})
    }

    const footer = <button onClick={handleAddClick}> Add to cart
    </button>

    return <PictureCard img={img} key={id} footer={footer}>
        <ProductInfo name={name} id={id} price={price}/>
    </PictureCard>
}

Product.propTypes = {
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    info: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired,
    add: PropTypes.func.isRequired
}

export default Product