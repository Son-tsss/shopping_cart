import shoppingCartReducer from "../../src/shopping_cart_reducer"

it('new shopping cart created with empty items list', () => {
    const real = shoppingCartReducer();
    const expected = {
        items: [],
        discount: 1
    };
    expect(real).toEqual(expected);
});
