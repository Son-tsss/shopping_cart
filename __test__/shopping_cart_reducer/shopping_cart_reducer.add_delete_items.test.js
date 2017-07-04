import shoppingCartReducer from "../../src/shopping_cart_reducer"

it('should add new item to the items list', () => {
    const prevState = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 0.5
            }
        ],
        discount: 1
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

    const real = shoppingCartReducer(prevState, {type: "DELETE_ITEM", id: "i3"});

    expect(real).toMatchSnapshot();
});
