import ShoppingCart from '../../src/shopping_cart'

it('should increment existing item in the items list', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem(newItem.id)

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
})

it('incrementing not existing item should change nothing', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.incrementItem("i3")

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
})

it('should decrement existing item in the items list ', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.decrementItem(newItem.id)

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
})

it('decrementing not existing item should change nothing ', ()=>{
    const shoppingCart = new ShoppingCart

    const newItem  = {
        id: "i1",
        price: 100
    }

    shoppingCart.addItem(newItem)
    shoppingCart.decrementItem("i3")

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
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

    const real = shoppingCart.historyState

    expect(real).toMatchSnapshot()
})

