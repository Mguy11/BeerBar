import React, { Component } from 'react'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';

export default class Maps extends Component {
    render() {
        return (
            <section id="Maps" ref={element => this.sectionRef = element}>
                <Container style={{ maxWidth: '100%', paddingBottom: '2em' }}>

                    <h1 style={{ textAlign: 'center', fontSize: '4em' }}>Where to find us?</h1>
                    <Row>
                        <Col xs={6} className="maps">



                        </Col>

                        <Col xs={6} className="maps">

                            <Map
                                center={[51.920840, 4.488249]}
                                zoom={12}
                                defaultWidth
                                animate
                                defaultHeight
                            >
                                <Marker anchor={[50.874, 4.6947]} payload={1} onClick={({ event, anchor, payload }) => { }} />
                            </Map>

                        </Col>

                    </Row>

                </Container>
            </section>
        );
    }
}