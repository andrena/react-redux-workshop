import React from 'react'
import RegisterList from './RegisterList'
import {mount} from 'enzyme'

describe('<RegisterList />', () => {
    it('renders without crashing', () => {
        mount(<RegisterList />)
    })
})


