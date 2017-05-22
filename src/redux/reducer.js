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

export const selectors = {
    getFilteredList: ({list = [], searchText = ''}) => {
        const lowerCaseSearchText = searchText.toLowerCase()
        return list.filter((listItem) => listItem.toLowerCase().includes(lowerCaseSearchText))
    }
}