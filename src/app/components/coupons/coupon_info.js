import React from 'react'
import PropTypes from 'prop-types'

const CouponInfo = ({id, to, name, discount}) => {
    return <div className="coupon-info">
        <p className="coupon-info-name">{name}</p>
        <p className="coupon-info-id">{id}</p>
        <p className="coupon-info-discount">-{100 - discount * 100}%{!!to && ` to ${to}`}</p>
    </div>
}

CouponInfo.propTypes = {
    id: PropTypes.string.isRequired,
    to: PropTypes.string,
    name: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired
}

export default CouponInfo