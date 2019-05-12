import React, { Component } from 'react'
import MenuItemsTabs from './MenuItemsTabs'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class NavBar extends Component {

    render() {
        return (
            <div className="menu">
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>                  
                            <h2>Menu</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <MenuItemsTabs />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}