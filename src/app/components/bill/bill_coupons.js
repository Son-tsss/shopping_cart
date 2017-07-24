import React from 'react'
import PropTypes from 'prop-types'

const BillCoupons = ({cartCoupons}) => {
    return <div className="coupons-list">
        <p>Coupons</p>
        <ul>
            {
                cartCoupons.map(({id, discount, info: {name}}) => {
                    return <li key={id}>
                        <span>{`${id} ${name} discount: -${100 - discount * 100}`}</span>
                    </li>
                })
            }
        </ul>
    </div>
}

BillCoupons.propTypes = {
    cartCoupons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}

export default BillCoupons