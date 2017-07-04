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

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
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

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
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

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
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

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
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