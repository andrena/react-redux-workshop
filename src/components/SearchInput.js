import React from 'react'
import {InputGroup, InputGroupButton, Input} from 'reactstrap'

export default () => (
    <InputGroup>
        <InputGroupButton>Suchen</InputGroupButton>
        <Input placeholder="Bitte geben Sie einen Suchbegriff ein"/>
    </InputGroup>
)