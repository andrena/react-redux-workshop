import {actions, actionTypes} from './actions'

describe('actions', () => {
    const itemName = 'TestItemName'
    it('should return the correct object for ' + actions.addIndexItem.name , () => {
        const action = actions.addIndexItem(itemName)

        expect(action.type).toBe(actionTypes.ADD_INDEX_ITEM)
        expect(action.name).toBe(itemName)
    })

    it('should return the correct object for ' + actions.searchIndexItem.name, () => {
        const action = actions.searchIndexItem(itemName)

        expect(action.type).toBe(actionTypes.SEARCH_INDEX_ITEM)
        expect(action.name).toBe(itemName)
    })
})