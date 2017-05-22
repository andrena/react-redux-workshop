import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col, Jumbotron} from 'reactstrap'
import SearchInput from './SearchInput'
import AddInput from './AddInput'
import RegisterList from './RegisterList'

export default () => (
    <Container>
        <Jumbotron>
            <h1 className="display-3">Navigatorentreffen Register</h1>
            <p className="lead">
                Diese kleine Anwendung stellt ein Register zur verfügung, welches man selbst befüllen kann.
            </p>

            <Row>
                <Col xs="12" sm="6"> <SearchInput /> </Col>
                <Col xs="12" sm="6"> <AddInput /> </Col>
            </Row>

        </Jumbotron>

        <Container>
            <RegisterList />
        </Container>
    </Container>
)