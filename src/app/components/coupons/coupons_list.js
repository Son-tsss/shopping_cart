import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {shoppingCartWithHistoryActions} from '../../actions'
import coupons from '../../../data/coupons'

import Coupon from './coupon'

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

const CouponsList = ({coupons, apply}) => {
    return <div className="coupons">
        <h1>Coupons</h1>
        <div className="coupons-list">
            {
                coupons.map(coupon => {
                    const action = () => { apply({coupon})}

                    return <Coupon coupon={coupon} key={coupon.id} action={action} actionName="Apply coupon"/>
                })
            }
        </div>
    </div>
}


CouponsList.propTypes = {
    coupons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    apply: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(CouponsList)