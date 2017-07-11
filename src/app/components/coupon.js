import React from 'react'

const Coupon = ({id, to, info, discount}) => {
    return <div className="discount">
        <p>{info.name}</p>
        <p>{100 - discount*100}%</p>
        {!!to && <p>to: {to}</p>}
    </div>
}

export default Coupon