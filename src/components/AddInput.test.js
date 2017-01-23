import React from 'react'
import ReactDOM from 'react-dom'
import {AddInput} from './AddInput'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddInput />, div)
});
