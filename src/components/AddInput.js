import React, {Component} from 'react'
import {connect} from 'react-redux'
import {InputGroup, InputGroupButton, Input} from 'reactstrap'
import {actions} from '../redux/actions'

export class AddInput extends Component {
    constructor(props) {
        super(props)

        this.updateName = this.updateName.bind(this)
        this.save = this.save.bind(this)
        this.state = {currentName: ''}
    }

    updateName(currentName) {
        this.setState({currentName})
    }

    save() {
        const {addIndexItem} = this.props
        const {currentName} = this.state

        addIndexItem(currentName)
        this.updateName('')
    }

    render() {
        return (
            <InputGroup>
                <Input
                    value={this.state.currentName}
                    onChange={({target}) => this.updateName(target.value)}
                    placeholder="Bitte geben Sie einen Begriff ein"
                />
                <InputGroupButton onClick={this.save}>Hinzufügen</InputGroupButton>
            </InputGroup>
        )
    }
}


const mapStateToProps = (state) => (
    {}
)
const mapActionsToProps = {
    addIndexItem: actions.addIndexItem
}


export default connect(mapStateToProps, mapActionsToProps)(AddInput)