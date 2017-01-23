import reducer from './reducer'
import {actionTypes} from './actions'

describe('reducer', () => {
    it('should return the correct default state', () => {
        const state = {}

        const reducedState = reducer(state, {})

        expect(reducedState).toBe(state)
    })

    it('should return the correct state for action type ' + actionTypes.ADD_INDEX_ITEM, () => {
        const testItem = 'TestItem';
        const action = {type: actionTypes.ADD_INDEX_ITEM, name: testItem}

        const reducedState = reducer(undefined, action)

        expect(reducedState.list.length).toBe(1)
        expect(reducedState.list[0]).toBe(testItem)
    })

    it('should return the correct state for action type ' + actionTypes.SEARCH_INDEX_ITEM, () => {
        const state = {}
        const action = {type: actionTypes.SEARCH_INDEX_ITEM}

        const reducedState = reducer(state, action)

        expect(reducedState).toBe(state)
    })
})