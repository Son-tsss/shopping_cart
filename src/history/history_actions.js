import {UNDO, REDO} from './history_action_types'

const undo = () => {
    const type = UNDO
    return {type}
}


const redo = () => {
    const type = REDO

    return {type}
}


export const historyActions = (actions) => {
    const keys = Object.keys(actions)
    const wrappedActions = {}

    keys.forEach(key => {
        const action = actions[key]
        wrappedActions[key] = (payload) => {
            if (typeof action(payload) === 'function')
                return (dispatch, getState) => {
                    const getCurrentState = () => {
                        const {states, currentStatePointer} = getState()
                        return states[currentStatePointer]
                    }


                    return action(payload)(dispatch, getCurrentState)


                }

            return action(payload)
        }
    })

    return {
        ...wrappedActions,
        undo,
        redo
    }
}