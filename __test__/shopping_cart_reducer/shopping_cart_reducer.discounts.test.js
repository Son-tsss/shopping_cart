import shoppingCartReducer from "../../src/shopping_cart/shopping_cart_reducer"

it('should apply coupons to the item', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                coupons: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                coupons: 1
            }
        ],
        coupons: 1
    }

    const discount = {
        coupons: 0.5,
        id: "i2"
    }

    const real = shoppingCartReducer(prevState, {type: "APPLY_DISCOUNT_TO_ITEM", ...discount});

    expect(real).toMatchSnapshot();
});

it('applying coupons to not existing item should change nothing', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                coupons: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                coupons: 1
            }
        ],
        coupons: 1
    }

    const discount = {
        coupons: 0.5,
        id: "i3"
    }

    const real = shoppingCartReducer(prevState, {type: "APPLY_DISCOUNT_TO_ITEM", ...discount});

    expect(real).toMatchSnapshot();
});

it('should apply coupons to the cart', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                coupons: 0.5
            },
            {
                id: "i2",
                price: 200,
                count: 1,
                coupons: 1
            }
        ],
        coupons: 1
    }

    const real = shoppingCartReducer(prevState, {type: "APPLY_DISCOUNT_TO_CART", coupons: 0.75});

    expect(real).toMatchSnapshot();
});