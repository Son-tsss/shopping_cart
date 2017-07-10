import history from "../../src/history/history_reducer"

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCR":
            return state + 1
        default:
            return state
    }
}

it("should return reducer", () => {
    expect(history(reducer)).toBeInstanceOf(Function)
})

it("should have initial state of given reducer as previous state and correct current state", () => {
    const reducerWithHistory = history(reducer)
    const real = reducerWithHistory(undefined, {type: "INCR"})

    expect(real).toMatchSnapshot()
})

it("should have new state of given reducer as current state", () => {
    const reducerWithHistory = history(reducer)

    const initialState = {
        previousStates: [0, 1],
        currentState: 2,
        futureStates: []
    }

    const real = reducerWithHistory(initialState,{type: "INCR"})

    expect(real).toMatchSnapshot()
})

it("should have prev state as current and current state in futureStates after undo", () => {
    const reducerWithHistory = history(reducer)

    const initialState = {
        previousStates: [0,1],
        currentState: 2,
        futureStates: []
    }
    const real = reducerWithHistory(initialState,{type: "UNDO"})

    expect(real).toMatchSnapshot()
})

it("should have next state as current and current state in previousStates after redo", () => {
    const reducerWithHistory = history(reducer)

    const initialState = {
        previousStates: [0,1],
        currentState: 2,
        futureStates: [4, 3]
    }
    let real = reducerWithHistory(initialState,{type: "REDO"})

    const expected = {
        previousStates: [0, 1, 2],
        currentState: 3,
        futureStates: [4]
    }

    expect(real).toMatchSnapshot()
})

it("should have next state empty after new changes", () => {
    const reducerWithHistory = history(reducer)

    const initialState = {
        previousStates: [0,1],
        currentState: 2,
        futureStates: [4, 3]
    }

    let real = reducerWithHistory(initialState, {type: "INCR"})

    expect(real).toMatchSnapshot()
})