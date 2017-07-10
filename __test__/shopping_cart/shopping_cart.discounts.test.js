import ShoppingCart from '../../src/shopping_cart/shopping_cart_actions'

it('should apply discount to the existing item', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.applyDiscountToItem(0.5, newItem.id)

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
})

it('applying discount to not existing item should change nothing', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.applyDiscountToItem(0.5, "i3")

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
})

it('should apply discount to cart', ()=>{
    const shoppingCart = new ShoppingCart

    shoppingCart.applyDiscountToCart(0.5)

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
})
