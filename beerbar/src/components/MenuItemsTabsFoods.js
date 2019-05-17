import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'

export default class MenuItemsTabsFoods extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
          key: 'home',
        };
      }
     
    render() {
        return(
            <Tabs
                className="menu-tabs"
                defaultActiveKey="lunch"
            >
                <Tab eventKey="lunch" title="Lunch">
                    
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Lunch</h3>
                        <ListGroup.Item>Old Cheese Sandwich</ListGroup.Item>
                        <ListGroup.Item>Clubhouse</ListGroup.Item>
                        <ListGroup.Item>BLT</ListGroup.Item>
                        <ListGroup.Item>Tuna Time</ListGroup.Item>
                    </ListGroup>
                </Tab>

                <Tab eventKey="burgers" title="Burgers">

                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Burgers</h3>
                        <ListGroup.Item>The Braised Bull Burger </ListGroup.Item>
                        <ListGroup.Item>Spicy Kicker</ListGroup.Item>
                        <ListGroup.Item>The Longhorn</ListGroup.Item>
                        <ListGroup.Item>Master Beef</ListGroup.Item>
                    </ListGroup>
                </Tab>
                
                <Tab eventKey="snacks" title="Snacks"> 

                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Snacks</h3>
                        <ListGroup.Item>Nachos</ListGroup.Item>
                        <ListGroup.Item>Quesadillas</ListGroup.Item>
                        <ListGroup.Item>Shrimp Tempura</ListGroup.Item>
                        <ListGroup.Item>FRESHAVACADO</ListGroup.Item>
                    </ListGroup>
                </Tab>

                <Tab eventKey="sidedishes" title="Side dishes">    
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Side dishes</h3>
                        <ListGroup.Item>Fries</ListGroup.Item>
                        <ListGroup.Item>Salad</ListGroup.Item>
                    </ListGroup>
                </Tab>
            </Tabs>
        );
    }
    
}

