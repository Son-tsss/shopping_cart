import React, {Component} from 'react'
import {connect} from 'react-redux'
import CouponsList from '../components/coupons_list'
import {shoppingCartWithHistoryActions} from '../actions'
import coupons from '../../coupons'

const {applyCoupon} = shoppingCartWithHistoryActions

const mapStateToProps = (state) => {
    return {coupons}
}

const mapDispatchToProps = (dispatch) => {
    return {
        apply: (payload) => {
            dispatch(applyCoupon(payload))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CouponsList)