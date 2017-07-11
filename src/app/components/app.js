import React from 'react'
import ProductsList from '../containers/predefined_products_list'
import CouponsList from '../containers/predefined_coupons_list'
import ShoppingCart from '../containers/user_shopping_cart'
import Bill from '../containers/user_bill'

const App = () => (
    <div>
        <ProductsList/>
        <CouponsList/>
        <ShoppingCart/>
        <Bill/>
    </div>
)

export default App