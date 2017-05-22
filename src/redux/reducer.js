import {actionTypes} from './actions'

export default (state = {list: []}, action) => {
    switch (action.type) {
        case actionTypes.ADD_INDEX_ITEM:
            return Object.assign({}, state, {list: action.name ? [...state.list, action.name] : [...state.list]})
        case actionTypes.SEARCH_INDEX_ITEM:
            return state
        default:
            return state
    }
}