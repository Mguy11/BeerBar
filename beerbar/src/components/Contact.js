import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'


export default class Contact extends Component {
    render() {
        return (
            <section id="Contact" ref={element => this.sectionRef = element}>
                <Form>
                    <h1 style={{ textAlign: 'center', fontSize: '4em' }}>Contact</h1>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Control placeholder="Last name" />
                        </Col>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form.Control placeholder="Message" />
                        </Col>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Button>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </section>
        );
    }
}