import shoppingCartReducer from "../../src/shopping_cart_reducer"

it('should apply discount to the item', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                discount: 1
            }
        ],
        discount: 1
    }

    const discount = {
        discount: 0.5,
        id: "i2"
    }

    const real = shoppingCartReducer(prevState, {type: "APPLY_DISCOUNT_TO_ITEM", ...discount});

    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                discount: 0.5
            }
        ],
        discount: 1
    }

    expect(real).toEqual(expected);
});

it('applying discount to not existing item should change nothing', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                discount: 1
            }
        ],
        discount: 1
    }

    const discount = {
        discount: 0.5,
        id: "i3"
    }

    const real = shoppingCartReducer(prevState, {type: "APPLY_DISCOUNT_TO_ITEM", ...discount});

    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                discount: 1
            }
        ],
        discount: 1
    }

    expect(real).toEqual(expected);
});

it('should apply discount to the cart', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                discount: 1
            }
        ],
        discount: 1
    }

    const real = shoppingCartReducer(prevState, {type: "APPLY_DISCOUNT_TO_CART", discount: 0.75});

    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                discount: 1
            }
        ],
        discount: 0.75
    }

    expect(real).toEqual(expected);
});