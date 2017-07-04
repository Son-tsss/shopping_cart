import ShoppingCart from '../../src/shopping_cart'

it('should undo the last changes', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.undo()

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

it('undo shouldn`t change anything if there is no previous states', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.undo()
    shoppingCart.undo()
    shoppingCart.undo()
    shoppingCart.undo()

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('canUndo should return true if there are previous states', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)

    const real = shoppingCart.canUndo()
    const expected = true

    expect(real).toEqual(expected)
})

it('canUndo should return false if there is no previous states', ()=>{
    const shoppingCart = new ShoppingCart

    shoppingCart.undo()

    const real = shoppingCart.canUndo()
    const expected = false
    expect(real).toEqual(expected)
})

it('should redo the last changes', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.undo()
    shoppingCart.redo()

    const {currentState: real} = shoppingCart.historyState
    const expected = {
        items: [
            {
                id: "i1",
                price: 100,
                count: 3,
                discount: 1
            }
        ],
        discount: 1
    }
    expect(real).toEqual(expected)
})

it('redo shouldn`t change anything if there is no future states', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.redo()

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

it('canRedo should return true if there are future states', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.undo()

    const real = shoppingCart.canRedo()
    const expected = true

    expect(real).toEqual(expected)
})

it('canUndo should return false if there is no future states', ()=>{
    const shoppingCart = new ShoppingCart

    const real = shoppingCart.canRedo()
    const expected = false
    expect(real).toEqual(expected)
})

it('should empty future states if there are new changes made', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)
    shoppingCart.undo()
    shoppingCart.incrementItem(newItem.id)

    const real = shoppingCart.canRedo()
    const expected = false

    expect(real).toEqual(expected)
})