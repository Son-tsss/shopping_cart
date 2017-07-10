import ShoppingCart from '../../src/shopping_cart/shopping_cart_actions'

it('should return correct bill', () => {
    const shoppingCart = new ShoppingCart

    const items = [
        {
            id: "i1",
            price: 100
        }, {
            id: "i2",
            price: 200
        }
    ]

    shoppingCart.addItem(items[0])
    shoppingCart.addItem(items[1])

    shoppingCart.applyDiscountToItem(0.5, items[0].id)
    shoppingCart.incrementItem(items[1].id)

    shoppingCart.applyDiscountToCart(0.75)

    const real = shoppingCart.getBill()

    expect(real).toMatchSnapshot()
})
