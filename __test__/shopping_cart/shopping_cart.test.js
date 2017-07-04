import ShoppingCart from '../../src/shopping_cart'

it('should create new shopping cart', ()=> {
    const shoppingCart = new ShoppingCart

    expect(shoppingCart).toBeInstanceOf(ShoppingCart)
})