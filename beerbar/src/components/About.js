import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class NavBar extends Component {

    updatePosition = () => {
        let position = this.sectionRef.offsetTop;
        this.props.getRef(position);
    };

    componentDidMount() {
        this.updatePosition()
    }


    render() {
        return (

            <section id="About" ref={element => this.sectionRef = element}>
                <Container style={{ maxWidth: '100%', paddingBottom: '2em', paddingTop: '2em' }}>
                    <Row >
                        <Col xs={6} className="about">
                            <h2>About us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                  It has survived not only five centuries, but also the leap into electronic typesetting,
                                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}