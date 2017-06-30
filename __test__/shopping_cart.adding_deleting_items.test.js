var ShoppingCart = require('../shopping_cart');

test('new item added exists in items collection', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
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

test('item deleted from item collection', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.deleteItem(newItem.id);

    var real = shoppingCart.getItems(),
        expected = [];

    expect(real).toEqual(expected);
});

test('not existing item deleting changes nothing', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.deleteItem("abc");

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

test('existing item incremented instead of adding', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);

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
