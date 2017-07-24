import {
    ADD_ITEM,
    DELETE_ITEM,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
    APPLY_COUPON,
    DELETE_COUPON
} from './shopping_cart_action_types'


const createAction = (type) => {
    return (payload) => {
        return {type, payload}
    }
}

const addItem = ({id, price, info}) => {
    return (dispatch, getState) => {
        const {items} = getState()

        let type = ADD_ITEM

        items.forEach( item => {
            item.id === id ? type = INCREMENT_ITEM : null
        })

        return dispatch({type, id, price, info})
    }
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

const deleteCoupon = createAction(DELETE_COUPON)

export default {
    addItem,
    deleteItem,
    incrementItem,
    decrementItem,
    applyCoupon,
    deleteCoupon
}