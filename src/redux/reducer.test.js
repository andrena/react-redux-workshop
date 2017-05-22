import reducer, {selectors} from './reducer'
import {actionTypes} from './actions'

describe('selectors', () => {
    it('should get the correctly filtered list items', () => {
        const fooBar = 'fooBar'
        const fooBaz = 'fooBaz'
        const state = {
            list: [
                fooBar,
                fooBaz,
                'test1',
                'test2',
                'test3',
                'test4',
            ],
            searchText: 'foo'
        }

        const filteredList = selectors.getFilteredList(state)

        expect(Array.isArray(filteredList)).toBe(true)
        expect(filteredList.length).toBe(2)
        expect(filteredList).toEqual([fooBar, fooBaz])
    })
})

describe('reducer', () => {
    it('should return the correct default state', () => {
        const state = {}

        const reducedState = reducer(state, {})

        expect(reducedState).toBe(state)
    })

    it('should not add an empty item', () => {
        const action = {type: actionTypes.ADD_INDEX_ITEM, name: ''}

        const reducedState = reducer(undefined, action)

        expect(reducedState.list.length).toBe(0)
    })

    it('should update the list correctly for one item', () => {
        const testItem = 'TestItem';
        const action = {type: actionTypes.ADD_INDEX_ITEM, name: testItem}

        const reducedState = reducer(undefined, action)

        expect(reducedState.list.length).toBe(1)
        expect(reducedState.list[0]).toBe(testItem)
    })

    it('should update the list correctly for 2 items', () => {
        const testItem0 = 'TestItem0'
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
        const testSearchText = 'testSearchText'

        const state = {}
        const action = {type: actionTypes.SEARCH_INDEX_ITEM, name: testSearchText}

        const reducedState = reducer(state, action)

        expect(reducedState.searchText).toBe(testSearchText)
    })
})