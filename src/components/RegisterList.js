import React from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'reactstrap'

export const RegisterList = ({list = []}) => (
    <ListGroup>
        {list.map((listItem) => <ListGroupItem>{listItem}</ListGroupItem>)}
    </ListGroup>
)

const mapStateToProps = (state) => (
    {list: state.list}
)
const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(RegisterList)
