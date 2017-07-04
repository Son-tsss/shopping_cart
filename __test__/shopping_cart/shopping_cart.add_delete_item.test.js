import ShoppingCart from '../../src/shopping_cart'

it('should add item to the items list', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 1,
                discount: 1
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('should increment existing item in the items list instead of adding', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.addItem(newItem)

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 2,
                discount: 1
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('should delete existing item from the items ', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.deleteItem(newItem.id)

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('deleting not existing item should change nothing ', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.deleteItem("i3")

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 1,
                discount: 1
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

