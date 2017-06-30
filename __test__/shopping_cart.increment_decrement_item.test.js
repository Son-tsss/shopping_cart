var ShoppingCart = require('../shopping_cart');

test('existing item incremened', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);
    shoppingCart.incrementItem(newItem.id)

    var real = shoppingCart.getItems(),
        expected = [
            {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 3
            }
        ];

    expect(real).toEqual(expected);
});

test('not existing item incrementing nothing changes', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);
    shoppingCart.incrementItem("abc");

    var real = shoppingCart.getItems(),
        expected = [
            {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 2
            }
        ];

    expect(real).toEqual(expected);
});

test('existing item decrements', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);
    shoppingCart.decrementItem(newItem.id);

    var real = shoppingCart.getItems(),
        expected = [
            {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 1
            }
        ];

    expect(real).toEqual(expected);
});

test('existing item not decrements below 0', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.decrementItem(newItem.id);
    shoppingCart.decrementItem(newItem.id);

    var real = shoppingCart.getItems(),
        expected = [
            {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 0
            }
        ];

    expect(real).toEqual(expected);
});