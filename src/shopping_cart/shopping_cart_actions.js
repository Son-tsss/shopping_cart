import {
    ADD_ITEM,
    DELETE_ITEM,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
    APPLY_COUPON
} from './shopping_cart_action_types'

const addItem = ({id, price, info}) => {
    const type = ADD_ITEM

    return {type, id, price, info}
}

const deleteItem = ({id}) => {
    const type = DELETE_ITEM

    return {type, id}
}

const incrementItem = ({id}) => {
    const type = INCREMENT_ITEM

    return {type, id}
}

const decrementItem = ({id}) => {
    const type = DECREMENT_ITEM

    return {type, id}
}


const applyCoupon = ({coupon}) => {
    const type = APPLY_COUPON

    return {type, coupon}
}

export default {
    addItem,
    deleteItem,
    incrementItem,
    decrementItem,
    applyCoupon
}