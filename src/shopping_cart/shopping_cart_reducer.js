import {
    ADD_ITEM,
    DELETE_ITEM,
    INCREMENT_ITEM,
    DECREMENT_ITEM,
    APPLY_COUPON,
    DELETE_COUPON
} from './shopping_cart_action_types'

const initialState = {
    items: [],
    coupons: []
}

const shoppingCartReducer = (state = initialState, action = {}) => {

    const {items, coupons} = state

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [
                    ...items,
                    {
                        id: action.id,
                        price: action.price,
                        info: action.info,
                        count: 1
                    }
                ]
            }

        case DELETE_ITEM:
            return {
                ...state,
                items: items.filter(item => item.id !== action.id)
            }

        case INCREMENT_ITEM:
            return {
                ...state,
                items: items.map(item =>
                    item.id === action.id
                        ? {...item, count: item.count + 1}
                        : item
                )
            }

        case DECREMENT_ITEM:
            return {
                ...state,
                items: items.map(item =>
                    item.id === action.id && item.count > 1
                        ? {...item, count: item.count - 1}
                        : item
                )
            }

        case APPLY_COUPON:
            return {
                ...state,
                coupons: [...coupons.filter(({id}) => action.coupon.id !== id), action.coupon]
            }

        case DELETE_COUPON:
            return {
                ...state,
                coupons: [...coupons.filter(({id}) => action.id !== id)]
            }

        default:
            return state
    }
}

export default shoppingCartReducer
