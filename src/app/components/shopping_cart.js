import React from 'react'
import ShoppingCartItem from './shopping_cart_item'

const ShoppingCart = ({products, increment, decrement, deleteItem}) => {
    return <div className="shopping-cart">
        {
            products.map(
                product => <ShoppingCartItem product = {product} actions ={{increment, decrement, deleteItem}} key={product.id}/>
            )
        }
    </div>
}

export default ShoppingCart