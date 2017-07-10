import shoppingCartReducer from "../../src/shopping_cart/shopping_cart_reducer"

it('should add new item to the items list', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                coupons: 0.5
            }
        ],
        coupons: 1
    }

    const newItem = {
        id: "i2",
        price: 200
    }

    const real = shoppingCartReducer(prevState, {type: "ADD_ITEM", ...newItem});

    expect(real).toMatchSnapshot()
});

it('should delete existing item from items list', () => {
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

    const real = shoppingCartReducer(prevState, {type: "DELETE_ITEM", id: "i2"});

    expect(real).toMatchSnapshot();
});

it('deleting not existing item from items list should changes nothing', () => {
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

    const real = shoppingCartReducer(prevState, {type: "DELETE_ITEM", id: "i3"});

    expect(real).toMatchSnapshot();
});
