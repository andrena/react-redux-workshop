import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col, Jumbotron} from 'reactstrap'

// checkout http://reactstrap.github.io/components/ to see how reactstrap components work

export default () => (
    <Container>
        <Jumbotron>
            <h1 className="display-3">Navigatorentreffen Register</h1>
            <p className="lead">
                Diese kleine Anwendung stellt ein Register zur verfügung, welches man selbst befüllen kann.
            </p>
        </Jumbotron>
        <Row>Search Box</Row>
        <Row>Add new Index Item</Row>
        <Row>Index List</Row>
    </Container>
)