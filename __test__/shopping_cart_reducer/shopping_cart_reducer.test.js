import shoppingCartReducer from "../../src/shopping_cart/shopping_cart_reducer"

it('new shopping cart created with empty items list', () => {
    const real = shoppingCartReducer();

    expect(real).toMatchSnapshot();
});
