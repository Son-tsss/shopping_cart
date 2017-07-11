import React from 'react'
import Coupon from './coupon'

const ProductsList = ({coupons, apply}) => {
    return <div className="coupons-list">
        {
            coupons.map(coupon => {
                const {id, to, info, discount} = coupon

                return <div className="coupons-list-item" key={id}>
                    <Coupon info={info} to={to} discount={discount} id={id}/>
                    <button onClick={() => {
                        apply({coupon})
                    }}> Apply coupon
                    </button>
                </div>
            })
        }
    </div>
}

export default ProductsList