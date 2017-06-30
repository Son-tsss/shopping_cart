var ShoppingCart = require('../shopping_cart');

test('new shopping cart created with empty items list', function () {
    var shoppingCart = new ShoppingCart;
    var real = shoppingCart.getItems();
    var expected = [];
    expect(real).toEqual(expected);
});
