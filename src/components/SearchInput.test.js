import React from 'react';
import {mount} from 'enzyme'
import {SearchInput} from './SearchInput';

describe('<SearchInput />', () => {
    it('renders without crashing', () => {
        mount(<SearchInput />)
    })

    it('should execute search on click', () => {
        const mockFunction = jest.fn()
        const wrapper = mount(<SearchInput search={mockFunction}/>)

        wrapper.find('InputGroupButton').find('button').simulate('click')

        expect(mockFunction.mock.calls.length).toBe(1)
    })

})


