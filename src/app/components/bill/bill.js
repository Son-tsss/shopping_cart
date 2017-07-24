import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import BillItems from './bill_items'
import BillCoupons from './bill_coupons'

import shoppingCartWithHistorySelector from '../../selectors'

const mapStateToProps = (state) => {
    const {bill} = shoppingCartWithHistorySelector(state)

    return bill
}

const Bill = ({items, sum, total, cartCoupons}) => {
    return <div className = "bill">
        <BillItems items={items}/>
        <BillCoupons cartCoupons={cartCoupons}/>
        <div className="bill-price">
            <p>Price</p>
            <p>Sum: {sum}</p>
            <p>Total: {total}</p>
        </div>
    </div>
}

Bill.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    sum: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    cartCoupons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(mapStateToProps)(Bill)