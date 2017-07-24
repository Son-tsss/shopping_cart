import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import shoppingCartWithHistorySelector from '../../selectors'
import {shoppingCartWithHistoryActions} from '../../actions'

import ShoppingCartItem from './shopping_cart_item'

const {incrementItem, decrementItem, deleteItem} = shoppingCartWithHistoryActions

const mapStateToProps = (state) => {
    const {items} = shoppingCartWithHistorySelector(state)

    return {products: items}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({incrementItem, decrementItem, deleteItem}, dispatch)
}

const ShoppingCart = ({products, incrementItem, decrementItem, deleteItem}) => {
    return <div className="shopping-cart">
        {
            products.map(
                product => <ShoppingCartItem product={product} actions={{incrementItem, decrementItem, deleteItem}}
                                             key={product.item.id}/>
            )
        }
    </div>
}

ShoppingCart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    incrementItem: PropTypes.func.isRequired,
    decrementItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)