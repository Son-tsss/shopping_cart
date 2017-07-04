const initialState = {
    items: [],
    discount: 1
}

const shoppingCartReducer = (state = initialState, action = {}) => {

    const {items} = state

    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [
                    ...items,
                    {
                        id: action.id,
                        price: action.price,
                        discount: 1,
                        count: 1
                    }
                ]
            }

        case "DELETE_ITEM":
            return {
                ...state,
                items: items.filter(item => item.id !== action.id)
            }

        case "INCREMENT_ITEM":
            return {
                ...state,
                items: items.map(item =>
                    item.id === action.id
                        ? {...item, count: item.count + 1}
                        : item
                )
            }

        case "DECREMENT_ITEM":
            return {
                ...state,
                items: items.map(item =>
                    item.id === action.id && item.count > 0
                        ? {...item, count: item.count - 1}
                        : item
                )
            }

        case "APPLY_DISCOUNT_TO_ITEM":
            return {
                ...state,
                items: items.map(item =>
                    item.id === action.id
                        ? {...item, discount: action.discount}
                        : item
                )
            }

        case "APPLY_DISCOUNT_TO_CART":
            return {
                ...state,
                discount: action.discount
            }

        default:
            return state
    }
}

export default shoppingCartReducer
