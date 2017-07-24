import React from 'react'
import History from './history/history'
import ProductsList from './products/products_list'
import CouponsList from './coupons/coupons_list'
import ShoppingCart from './shopping_cart/shopping_cart'
import UsedCoupons from './coupons/used_coupons'
import Bill from './bill/bill'

const App = () => (
    <div>
            <History/>
        <ProductsList/>
        <CouponsList/>
        <ShoppingCart/>
        <UsedCoupons/>
        <Bill/>
    </div>
)

export default App