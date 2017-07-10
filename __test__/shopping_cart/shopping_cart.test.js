import ShoppingCart from '../../src/shopping_cart/shopping_cart_actions'

it('should create new shopping cart', ()=> {
    const shoppingCart = new ShoppingCart

    expect(shoppingCart).toBeInstanceOf(ShoppingCart)
})