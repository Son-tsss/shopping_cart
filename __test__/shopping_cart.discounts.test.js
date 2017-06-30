var ShoppingCart = require('../shopping_cart');

test('discount applied to the existing item', function () {
    var shoppingCart = new ShoppingCart,
        newItem = {
            id: "1",
            price: 100
        };

    shoppingCart.addItem(newItem);
    shoppingCart.addItem(newItem);

    shoppingCart.applyDiscountToItem(0.25, newItem.id);

    var real = shoppingCart.getItems(),
        expected = [
            {
                id: "1",
                price: 100,
                finalPrice: 25,
                count: 2
            }
        ];

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

    var real = shoppingCart.getItems(),
        expected = [
            {
                id: "1",
                price: 100,
                finalPrice: 100,
                count: 2
            }
        ];

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

    shoppingCart.applyDiscountToItem(0.5, secondItem.id);

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
                    finalPrice: 100,
                    count: 1
                }
            ],
            price: 400,
            finalPrice: 75
        };

    expect(real).toEqual(expected);
});

test('discount applied to the empty cart', function () {
    var shoppingCart = new ShoppingCart;

    shoppingCart.applyDiscountToCart(0.25);

    var real = shoppingCart.getItems(),
        expected = [];

    expect(real).toEqual(expected);
});