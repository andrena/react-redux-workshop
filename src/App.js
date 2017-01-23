import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col, Jumbotron, InputGroup, InputGroupButton, Input, ListGroup, ListGroupItem} from 'reactstrap'
import SearchInput from './SearchInput'
import AddInput from './AddInput'

// checkout http://reactstrap.github.io/components/ to see how reactstrap components work

export default () => (
    <Container>
        <Jumbotron>
            <h1 className="display-3">Navigatorentreffen Register</h1>
            <p className="lead">
                Diese kleine Anwendung stellt ein Register zur verfügung, welches man selbst befüllen kann.
            </p>

            <Row>
                <Col xs="12" sm="6">
                    <SearchInput />
                </Col>
                <Col xs="12" sm="6">
                    <AddInput />
                </Col>
            </Row>

        </Jumbotron>
        <Container>
            <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </Container>
    </Container>
)