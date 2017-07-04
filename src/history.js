const history = (reducer) => {
    const initialState = {
        previousStates: [],
        currentState: reducer(undefined, {}),
        futureStates: []
    }

    return (state = initialState, action) => {
        const {previousStates, currentState, futureStates} = state
        switch (action.type) {
            case 'UNDO':
                return {
                    previousStates: previousStates.slice(0, previousStates.length - 1),
                    currentState: previousStates[previousStates.length - 1],
                    futureStates: [...futureStates, currentState]
                }
            case 'REDO':
                return {
                    previousStates: [...previousStates, currentState],
                    currentState: futureStates[futureStates.length - 1],
                    futureStates: futureStates.slice(0, futureStates.length - 1)
                }
            default:
                return {
                    previousStates: [...previousStates, currentState],
                    currentState: reducer(currentState, action),
                    futureStates: []
                }
        }
    }
}

export default history