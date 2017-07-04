import shoppingCartReducer from "./shopping_cart_reducer"
import history from "./history"

const shoppingCartWithHistoryReducer = history(shoppingCartReducer)

export default class ShoppingCart {
    constructor (){
        this.historyState = shoppingCartWithHistoryReducer(undefined, {});
    }

    dispatch(action){
        this.historyState = shoppingCartWithHistoryReducer(this.historyState, action)
    }

    getBill(){
        const {currentState: {items, discount}} = this.historyState;

        return {
            items: items.map(item => this.getBillItem(item)),
            price: items.reduce((sum, {price, count}) => (sum + price*count) , 0),
            discount,
            total: items.reduce((sum, item) => (sum + this.getBillItem(item).finalPrice), 0)
        }
    }

    getBillItem(item){
        const {currentState: {discount: cartDiscount}} = this.historyState
        const discount = cartDiscount < item.discount ? cartDiscount : item.discount
        const {price, count} = item

        return {
            ...item,
            discount: discount,
            finalPrice: price * count * discount
        }
    }

    addItem({id, price}){
        const type = this.hasItem(id) ? "INCREMENT_ITEM" : "ADD_ITEM"

        this.dispatch({type, id, price})
    }

    hasItem(id){
        const {currentState: {items}} = this.historyState;
        let hasItem = false

        items.forEach( item => {
            if (item.id === id)
                hasItem = true
        })

        return hasItem
    }

    deleteItem(id){
        const type = "DELETE_ITEM"

        this.dispatch({type, id})
    }

    incrementItem(id){
        const type = "INCREMENT_ITEM"

        this.dispatch({type, id})
    }

    decrementItem(id){
        const type = "DECREMENT_ITEM"

        this.dispatch({type, id})
    }

    applyDiscountToItem(discount, id){
        const type = "APPLY_DISCOUNT_TO_ITEM"

        this.dispatch({type, discount, id})
    }

    applyDiscountToCart(discount){
        const type = "APPLY_DISCOUNT_TO_CART"

        this.dispatch({type, discount})
    }

    undo(){
        const type = "UNDO"
        if(this.canUndo())
            this.dispatch({type})
    }

    canUndo(){
        const {previousStates} = this.historyState
        return previousStates.length > 0
    }

    redo(){
        const type = "REDO"

        if(this.canRedo())
            this.dispatch({type})
    }

    canRedo() {
        const {futureStates} = this.historyState
        return futureStates.length > 0
    }
}