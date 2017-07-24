import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {shoppingCartWithHistoryActions} from '../../actions'
import products from '../../../data/products'

import Product from './product'

const {addItem} = shoppingCartWithHistoryActions

const mapStateToProps = (state) => {
    return {products}
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (payload) => {
            dispatch(addItem(payload))
        }
    }
}

const ProductsList = ({products, add}) => {
    return <div className="products">
        <h1>Products</h1>
        <div className="products-list">
            {
                products.map(product => <Product {...product} add={add} key={product.id}/>)
            }
        </div>
    </div>
}

ProductsList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        info: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    })).isRequired,
    add: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)