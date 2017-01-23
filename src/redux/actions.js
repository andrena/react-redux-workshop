export const actionTypes = {
    ADD_INDEX_ITEM: 'ADD_INDEX_ITEM',
    SEARCH_INDEX_ITEM: 'SEARCH_INDEX_ITEM',
}

export const actions = {
    addIndexItem: (itemName) => ({type: actionTypes.ADD_INDEX_ITEM, name: itemName}),
    searchIndexItem: (itemName) => ({type: actionTypes.SEARCH_INDEX_ITEM, name: itemName}),
}