import React, {Component} from 'react'
import {connect} from 'react-redux'
import ShoppingCart from '../components/shopping_cart'
import shoppingCartWithHistorySelector from '../selectors'
import {shoppingCartWithHistoryActions} from '../actions'

const{incrementItem, decrementItem, deleteItem} = shoppingCartWithHistoryActions

const mapStateToProps = (state) => {
    const {items} = shoppingCartWithHistorySelector(state)

    return {products: items}
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (payload) => { dispatch(incrementItem(payload)) },
        decrement: (payload) => { dispatch(decrementItem(payload)) },
        deleteItem: (payload) => { dispatch(deleteItem(payload)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)