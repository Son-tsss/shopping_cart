import ShoppingCart from '../../src/shopping_cart'

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

    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 1,
                discount: 0.5,
                finalPrice: 50
            },
            {
                id: "i2",
                price: 200,
                count: 2,
                discount: 0.75,
                finalPrice: 300
            }
        ],
        discount: 0.75,
        price: 500,
        total: 350
    }

    expect(real).toEqual(expected)
})
