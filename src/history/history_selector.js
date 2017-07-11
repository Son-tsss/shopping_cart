export default (selector) => {
    return ({states, currentStatePointer}) => {
        const currentState = states[currentStatePointer]
        return {
            ...selector(currentState),
            canUndo: currentStatePointer > 0,
            canRedo: (currentStatePointer + 1) < states.length
        }
    }
}