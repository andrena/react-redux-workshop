import reducer from './reducer'
import {actionTypes} from './actions'

describe('reducer', () => {
    it('should return the correct default state', () => {
        const state = {testProp: 'testProp'}

        const reducedState = reducer(state, {})

        expect(reducedState).toBe(state)
    })

    it('should return the correct state for action type ' + actionTypes.ADD_INDEX_ITEM, () => {
        const state = {type: actionTypes.ADD_INDEX_ITEM}

        const reducedState = reducer(state, {})

        expect(reducedState).toBe(state)
    })

    it('should return the correct state for action type ' + actionTypes.SEARCH_INDEX_ITEM, () => {
        const state = {type: actionTypes.SEARCH_INDEX_ITEM}

        const reducedState = reducer(state, {})

        expect(reducedState).toBe(state)
    })
})