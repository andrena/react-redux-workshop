import React from 'react'
import {connect} from 'react-redux'
import {InputGroup, InputGroupButton, Input} from 'reactstrap'
import {actions} from '../redux/actions'

export const SearchInput = ({currentSearch, search}) => (
    <InputGroup>
        <InputGroupButton onClick={({target}) => search(target.value)}>
            Suchen
        </InputGroupButton>
        <Input placeholder="Bitte geben Sie einen Suchbegriff ein"/>
    </InputGroup>
)

const mapStateToProps = (state) => (
    {currentSearch: state.search}
)
const mapActionsToProps = {
    search: actions.searchIndexItem
}

export default connect(mapStateToProps, mapActionsToProps)(SearchInput)