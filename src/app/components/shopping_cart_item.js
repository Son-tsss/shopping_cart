import React from 'react'
import Product from './product'
import Coupon from './coupon'

const ShoppingCartItem = ({product, actions}) => {
    const {id, price, info, count, canDecrement, couponsApplied} = product
    const {increment, decrement, deleteItem} = actions

    return <div className="shopping-cart-product" key={id}>
        <Product info={info} price={price} id={id} />

        <p>coupons: {
            couponsApplied.map(coupon => <Coupon {...coupon} key={coupon.id}/>)
        }</p>

        <button onClick = {()=> {decrement({id})}} disabled = {!canDecrement}> - </button>
        <span>{count}</span>
        <button onClick = {()=> {increment({id})}} > + </button>

        <button onClick = {()=> {deleteItem({id})}}> x </button>
    </div>
}

export default ShoppingCartItem