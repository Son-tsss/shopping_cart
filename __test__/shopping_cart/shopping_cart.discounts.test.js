import ShoppingCart from '../../src/shopping_cart'

it('should apply discount to the existing item', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.applyDiscountToItem(0.5, newItem.id)

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 1,
                discount: 0.5
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('applying discount to not existing item should change nothing', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.applyDiscountToItem(0.5, "i3")

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 1,
                discount: 1
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('should apply discount to cart', ()=>{
    const shoppingCart = new ShoppingCart

    shoppingCart.applyDiscountToCart(0.5)

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [],
        discount: 0.5
    }
    expect(real).toEqual(expected)
})
