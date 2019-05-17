import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MenuItemsTabsDrinks from './MenuItemsTabsDrinks';
import MenuItemsTabsFoods from './MenuItemsTabsFoods';


export default class NavBar extends Component {

    render() {
        return (
            <section id="Menu" ref={element => this.sectionRef = element}>
                <Container style={{ maxWidth: '100%', padding: '2em' }}>

                    <h1 style={{ textAlign: 'center', fontSize: '4em' }}>Menu</h1>

                    <Row>
                        <Col xs={6} className="maps">
                            <div style={{ padding: '2em' }}>
                                <MenuItemsTabsDrinks />
                            </div>



                        </Col>

                        <Col xs={6} className="maps">
                            <div style={{ padding: '2em' }}>
                                <MenuItemsTabsFoods />
                            </div>

                        </Col>

                    </Row>

                </Container>
            </section>
        );
    }
}