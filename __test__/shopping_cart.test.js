var ShoppingCart = require('../shopping_cart');

test('shopping cart created', function () {
    var shoppingCart = new ShoppingCart;
    var real = shoppingCart.items;
    var expected = {};
    expect(real).toEqual(expected);
});

test('new item added', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 1
            }
        };

    expect(real).toEqual(expected);
});

test('item deleted', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.deleteItem(newItem.id);

    var real = shoppingCart.items,
        expected = {};

    expect(real).toEqual(expected);
});

test('not existing item deleting', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.deleteItem("abc");

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 1
            }
        };

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

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 2
            }
        };

    expect(real).toEqual(expected);
});

test('existing item incremened', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 25
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);
    shoppingCart.incrementItem(newItem.id)

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 3
            }
        };

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

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 2
            }
        };

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

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 1
            }
        };

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

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 25,
                finalPrice: 25,
                count: 0
            }
        };

    expect(real).toEqual(expected);
});

test('discount applied to the existing item', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 100
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);

    shoppingCart.applyDiscountToItem(0.25, newItem.id);

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 100,
                finalPrice: 25,
                count: 2
            }
        };

    expect(real).toEqual(expected);
});

test('discount applied to the not existing item nothing changes', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 100
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);

    shoppingCart.applyDiscountToItem(0.25, "123");

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 100,
                finalPrice: 100,
                count: 2
            }
        };

    expect(real).toEqual(expected);
});

test('discount applied to the cart', function () {
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

    var real = shoppingCart.items,
        expected = {
            "1": {
                id: "1",
                price: 100,
                finalPrice: 25,
                count: 2
            },
            "ab": {
                id: "ab",
                price: 200,
                finalPrice: 50,
                count: 1
            }
        };

    expect(real).toEqual(expected);
});

test('discount applied to the empty cart', function () {
    var shoppingCart = new ShoppingCart;

    shoppingCart.applyDiscountToCart(0.25);

    var real = shoppingCart.items,
        expected = {};

    expect(real).toEqual(expected);
});

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
    shoppingCart.applyDiscountToItem(0.5, secondItem.id);

    var real = shoppingCart.getBill(),
        expected = {
            items: {
                "1": {
                    id: "1",
                    price: 100,
                    finalPrice: 25,
                    count: 2
                },
                "ab": {
                    id: "ab",
                    price: 200,
                    finalPrice: 25,
                    count: 1
                }
            },
            price: 400,
            finalPrice: 75
        };

    expect(real).toEqual(expected);
});

test('empty bill is returned', function () {
    var shoppingCart = new ShoppingCart;

    var real = shoppingCart.getBill(),
        expected = {
            items: {},
            price: 0,
            finalPrice: 0
        };

    expect(real).toEqual(expected);
});


