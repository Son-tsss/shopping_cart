import {UNDO, REDO} from './history_action_types'

const initialState = {
    states: [{}],
    currentStatePointer: -1
}

const historyReducer = (reducer) => {

    return (state = initialState, action) => {
        const {states, currentStatePointer} = state
        switch (action.type) {
            case UNDO:
                return {
                    currentStatePointer: currentStatePointer > 0 ? currentStatePointer - 1 : 0
                }
            case REDO:
                return {
                    currentStatePointer: currentStatePointer < states.length - 1
                        ? currentStatePointer + 1
                        : states.length - 1
                }
            default:
                return {
                    states: [...states.slice(0, currentStatePointer+1), reducer(states[currentStatePointer], action)],
                    currentStatePointer: currentStatePointer + 1
                }
        }
    }
}

export default historyReducer