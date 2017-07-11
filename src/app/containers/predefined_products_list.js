import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductsList from '../components/products_list'
import {shoppingCartWithHistoryActions} from '../actions'
import products from '../../products'

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

export default connect(mapStateToProps,mapDispatchToProps)(ProductsList)