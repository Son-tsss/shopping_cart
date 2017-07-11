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
    return {
        ...actions,
        undo,
        redo
    }
}