var ShoppingCart = require('../shopping_cart');


test('correct bill is returned', function () {
    var shoppingCart = new ShoppingCart,
        firstItem = {
            id: "1",
            price: 100
        },
        secondItem = {
            id: "ab",
            price: 200
        };

    shoppingCart.addItem(firstItem);
    shoppingCart.addItem(firstItem);
    shoppingCart.addItem(secondItem);

    shoppingCart.applyDiscountToCart(0.25);

    var real = shoppingCart.getBill(),
        expected = {
            items: [
                {
                    id: "1",
                    price: 100,
                    finalPrice: 100,
                    count: 2
                },
                {
                    id: "ab",
                    price: 200,
                    finalPrice: 200,
                    count: 1
                }
            ],
            price: 400,
            finalPrice: 100
        };

    expect(real).toEqual(expected);
});

test('empty bill is returned for empty shopping cart', function () {
    var shoppingCart = new ShoppingCart;

    var real = shoppingCart.getBill(),
        expected = {
            items: [],
            price: 0,
            finalPrice: 0
        };

    expect(real).toEqual(expected);
});
