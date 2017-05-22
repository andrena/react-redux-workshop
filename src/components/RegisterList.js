import React from 'react'
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {selectors} from '../redux/reducer'

export const RegisterList = ({list = []}) => (
    <ListGroup>
        {list.map((listItem, index) => <ListGroupItem key={index}>{listItem}</ListGroupItem>)}
    </ListGroup>
)

RegisterList.propTypes = {
    list: React.PropTypes.array,
}

const mapStateToProps = (state) => (
    {list: selectors.getFilteredList(state)}
)
const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(RegisterList)
