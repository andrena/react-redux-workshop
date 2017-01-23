import reducer from './reducer'
import {actionTypes} from './actions'

describe('reducer', () => {
    it('should return the correct default state', () => {
        const state = {}

        const reducedState = reducer(state, {})

        expect(reducedState).toBe(state)
    })

    it('should update the list correctly for one item', () => {
        const testItem = 'TestItem';
        const action = {type: actionTypes.ADD_INDEX_ITEM, name: testItem}

        const reducedState = reducer(undefined, action)

        expect(reducedState.list.length).toBe(1)
        expect(reducedState.list[0]).toBe(testItem)
    })

    it('should update the list correctly for 2 items', () => {
        const testItem0 = 'TestItem0';
        const testItem1 = 'TestItem1'

        const action0 = {type: actionTypes.ADD_INDEX_ITEM, name: testItem0}
        const action1 = {type: actionTypes.ADD_INDEX_ITEM, name: testItem1}

        const reducedState0 = reducer(undefined, action0)
        const reducedState1 = reducer(reducedState0, action1)

        expect(reducedState1.list.length).toBe(2)
        expect(reducedState1.list[0]).toBe(testItem0)
        expect(reducedState1.list[1]).toBe(testItem1)
    })

    it('should return the correct state for action type ' + actionTypes.SEARCH_INDEX_ITEM, () => {
        const state = {}
        const action = {type: actionTypes.SEARCH_INDEX_ITEM}

        const reducedState = reducer(state, action)

        expect(reducedState).toBe(state)
    })
})