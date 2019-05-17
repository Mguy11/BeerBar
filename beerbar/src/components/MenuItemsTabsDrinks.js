import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'

export default class MenuItemsTabsDrinks extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'home',
        };
    }

    render() {
        return (
            <Tabs
                className="menu-tabs"
                defaultActiveKey="beers"
            >

                <Tab eventKey="beers" title="Beers">

                    <ListGroup style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                        <h3>Beers</h3>
                        <ListGroup.Item>Heineken</ListGroup.Item>
                        <ListGroup.Item>Jupiler</ListGroup.Item>
                        <ListGroup.Item>Amstel</ListGroup.Item>
                        <ListGroup.Item>Dommelsch</ListGroup.Item>
                        <ListGroup.Item>Grolsch</ListGroup.Item>
                        <ListGroup.Item>Hertog Jan</ListGroup.Item>
                        <ListGroup.Item>Bavaria</ListGroup.Item>
                        <ListGroup.Item>Brand</ListGroup.Item>
                        <ListGroup.Item>Palm</ListGroup.Item>
                    </ListGroup>
                </Tab>

                <Tab eventKey="alcoholfreebeers" title="Alcohol free Beers (0%)">

                    <ListGroup style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                        <h3>Alcohol free Beers (0%)</h3>
                        <ListGroup.Item>Budels Malt</ListGroup.Item>
                        <ListGroup.Item>Hoppy Lager</ListGroup.Item>
                        <ListGroup.Item>Playground</ListGroup.Item>
                    </ListGroup>
                </Tab>

                <Tab eventKey="wines" title="Wines">
                    <ListGroup style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                        <h3>Wines</h3>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </Tab>

                <Tab eventKey="sodas" title="Soda's">

                    <ListGroup style={{ paddingTop: '1em', paddingBottom: '1em' }}>
                        <h3>Soda's</h3>
                        <ListGroup.Item>Cola</ListGroup.Item>
                        <ListGroup.Item>Cola Light</ListGroup.Item>
                        <ListGroup.Item>Cola Zero</ListGroup.Item>
                        <ListGroup.Item>Orange Juice</ListGroup.Item>
                        <ListGroup.Item>7up</ListGroup.Item>
                        <ListGroup.Item>Chaudfontaine Sparkling</ListGroup.Item>
                        <ListGroup.Item>Chaudfontaine Still</ListGroup.Item>
                    </ListGroup>
                </Tab>
            </Tabs>
        );
    }

}

