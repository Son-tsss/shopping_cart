import React from 'react'
import PropTypes from 'prop-types'

import ShoppingCartItemInfo from './shopping_cart_item_info'
import PictureCard from '../picture_card'
import Counter from './counter'

const ShoppingCartItem = ({product, actions}) => {
    const {item, canDecrement, couponsApplied, finalPrice} = product
    const {info, price, id, count} = item
    const {incrementItem, decrementItem, deleteItem} = actions
    const {img, name} = info
    const discounts = couponsApplied
        ? couponsApplied.map( ({discount}) => `-${100-discount*100}%`)
        : undefined

    const handleDecrementItem = () => { decrementItem({id}) }
    const handleIncrementItem = () => { incrementItem({id}) }
    const handleDeleteItem = () => { deleteItem({id}) }

    const footer = <Counter
        count={count}
        canDecrement={canDecrement}
        incrementItem={handleIncrementItem}
        decrementItem={handleDecrementItem}
        deleteItem={handleDeleteItem} />

    return <PictureCard img={img} key={id} footer={footer} badges={discounts}>
        <ShoppingCartItemInfo name={name} id={id} price={price} finalPrice={finalPrice}/>
    </PictureCard>
}

ShoppingCartItem.propTypes = {
    product: PropTypes.shape({
        item: PropTypes.shape({
            info: PropTypes.shape({
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired
            }).isRequired,
            price: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired
        }).isRequired,
        canDecrement: PropTypes.bool.isRequired,
        couponsApplied: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            discount: PropTypes.number.isRequired
        }))
    }).isRequired,
    actions: PropTypes.shape({
        incrementItem: PropTypes.func.isRequired,
        decrementItem: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired
    }).isRequired
}

export default ShoppingCartItem