import shoppingCartReducer from "../../src/shopping_cart_reducer"

it('increments existing item', () => {
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

    const real = shoppingCartReducer(prevState, {type: "INCREMENT_ITEM", id: "i2"});

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
                count: 2,
                discount: 1
            }
        ],
        discount: 1
    }

    expect(real).toEqual(expected);
});

it('incrementing not existing item chages nothing', () => {
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

    const real = shoppingCartReducer(prevState, {type: "INCREMENT_ITEM", id: "i3"});

    expect(real).toMatchSnapshot();
});

it('decrements existing item', () => {
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
                count: 2,
                discount: 1
            }
        ],
        discount: 1
    }

    const real = shoppingCartReducer(prevState, {type: "DECREMENT_ITEM", id: "i2"});

    expect(real).toMatchSnapshot();
});

it('doesn`t decrement existing item below 0', () => {
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
                count: 0,
                discount: 1
            }
        ],
        discount: 1
    }

    const real = shoppingCartReducer(prevState, {type: "DECREMENT_ITEM", id: "i2"});

    expect(real).toMatchSnapshot();
});

it('decrementing not existing item changes nothing', () => {
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

    const real = shoppingCartReducer(prevState, {type: "DECREMENT_ITEM", id: "i3"});

    expect(real).toMatchSnapshot();
});