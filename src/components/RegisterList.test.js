import React from 'react'
import {RegisterList} from './RegisterList'
import {mount} from 'enzyme'

describe('<RegisterList />', () => {
    it('renders without crashing', () => {
        mount(<RegisterList />)
    });

    it('should have the correct amount of list items', () => {
        const list = [
            'Bonn',
            'London',
            'Madrid',
            'Los Angeles',
        ]

        const wrapper = mount(<RegisterList list={list} />)

        expect(wrapper.find('ListGroupItem').length).toBe(4)
    })

    it('should have no items', () => {
        const wrapper = mount(<RegisterList list={[]} />)

        expect(wrapper.find('ListGroupItem').length).toBe(0)
    })
})


