import React from 'react'
import {mount} from 'enzyme'
import {AddInput} from './AddInput'

describe('<AddInput />', () => {
    it('renders without crashing', () => {
        mount(<AddInput />)
    })

    it('should update the name', () => {
        const wrapper = mount(<AddInput />)

        const testChangeData = 'TestChangeData'

        wrapper.find('Input').simulate('change', {target: {value: testChangeData}})
        expect(wrapper.find('Input').prop('value')).toBe(testChangeData)
    })

    it('should update the name', () => {
        const mockFunction = jest.fn()
        const wrapper = mount(<AddInput addIndexItem={mockFunction}/>)

        wrapper.find('Input').simulate('change', {target: {value: 'TestChangeData'}})
        wrapper.find('InputGroupButton').find('button').simulate('click')

        expect(mockFunction.mock.calls.length).toBe(1)
    })
})

