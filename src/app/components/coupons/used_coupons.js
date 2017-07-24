import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import shoppingCartWithHistorySelector from '../../selectors'
import {shoppingCartWithHistoryActions} from '../../actions'

import Coupon from './coupon'

const {deleteCoupon} = shoppingCartWithHistoryActions

const mapStateToProps = (state) => {
    const {usedCoupons} = shoppingCartWithHistorySelector(state)

    return {coupons: usedCoupons}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCoupon: (payload) => {
            dispatch(deleteCoupon(payload))
        }
    }
}


const UsedCoupons = ({coupons, deleteCoupon}) => {
    return <div className="coupons-used">
        <h1>Coupons Used</h1>
        <div className="coupons-list">
            {
                coupons.map(coupon => {
                    const {id} = coupon
                    const action = () => {
                        deleteCoupon({id})
                    }

                    return <Coupon coupon={coupon} key={coupon.id} action={action} actionName="Delete coupon"/>
                })
            }
        </div>
    </div>
}

UsedCoupons.propTypes = {
    coupons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    deleteCoupon: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(UsedCoupons)