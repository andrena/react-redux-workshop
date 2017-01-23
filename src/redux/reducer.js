import {actionTypes} from './actions'

export default (state, action) => {
    switch (action.type) {
        case actionTypes.ADD_INDEX_ITEM:
            return state
        case actionTypes.SEARCH_INDEX_ITEM:
            return state
        default:
            return state
    }
}