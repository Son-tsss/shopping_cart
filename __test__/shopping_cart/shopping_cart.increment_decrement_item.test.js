import ShoppingCart from '../../src/shopping_cart'

it('should increment existing item in the items list', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)

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

it('incrementing not existing item should change nothing', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem("i3")

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

it('should decrement existing item in the items list ', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.decrementItem(newItem.id)

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 0,
                discount: 1
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('decrementing not existing item should change nothing ', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.decrementItem("i3")

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

it('shouldn`t decrement item below 0', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.decrementItem(newItem.id)
    shoppingCart.decrementItem(newItem.id)

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 0,
                discount: 1
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

