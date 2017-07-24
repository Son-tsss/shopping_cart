import React from 'react'
import PropTypes from 'prop-types'

import PictureCard from '../picture_card'
import CouponInfo from './coupon_info'

const Coupon = ({coupon, action, actionName}) => {
    const {id, discount, info, to} = coupon
    const {name} = info
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkZlwrRbIwmlowWkB9oXDXfyHQDNCIplTKkQ0IW2hsb0jvo1j"

    const handleApplyClick = () => {
        action({coupon})
    }

    const footer = <button onClick={handleApplyClick}>
        {actionName}
    </button>

    return <PictureCard img={img} key={id} footer={footer}>
        <CouponInfo name={name} id={id} discount={discount} to={to}/>
    </PictureCard>
}

Coupon.propTypes = {
    coupon: PropTypes.shape({
        id: PropTypes.string.isRequired,
        to: PropTypes.string,
        discount: PropTypes.number.isRequired,
        info: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    action: PropTypes.func.isRequired,
    actionName: PropTypes.string.isRequired
}

export default Coupon