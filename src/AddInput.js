import React from 'react'
import {InputGroup, InputGroupButton, Input} from 'reactstrap'

export default () => (
    <InputGroup>
        <Input placeholder="Bitte geben Sie einen Begriff ein"/>
        <InputGroupButton>Hinzufügen</InputGroupButton>
    </InputGroup>
)