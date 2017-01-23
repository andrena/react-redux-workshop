import React from 'react'
import {connect} from 'react-redux'
import {Input} from 'reactstrap'
import {actions} from '../redux/actions'

export const SearchInput = ({currentSearch, search}) => (
    <Input
        onChange={({target}) => search(target.value)}
        placeholder="Bitte geben Sie einen Suchbegriff ein"
    />
)

const mapStateToProps = (state) => (
    {currentSearch: state.search}
)
const mapActionsToProps = {
    search: actions.searchIndexItem
}

export default connect(mapStateToProps, mapActionsToProps)(SearchInput)