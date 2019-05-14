import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'

export default class MenuItemsTabs extends Component{

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
                defaultActiveKey="drinks"
            >
                
                <Tab eventKey="drinks" title="Drinks">
                    
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
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
                   
                  
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Alcohol free Beers (0%)</h3>
                        <ListGroup.Item>Budels Malt</ListGroup.Item>
                        <ListGroup.Item>Hoppy Lager</ListGroup.Item>
                        <ListGroup.Item>Playground</ListGroup.Item>
                    </ListGroup>
                
                   
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Wines</h3>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                   

                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
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
                <Tab eventKey="food" title="Food">
                    
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Lunch</h3>
                        <ListGroup.Item>Old Cheese Sandwich</ListGroup.Item>
                        <ListGroup.Item>Clubhouse</ListGroup.Item>
                        <ListGroup.Item>BLT</ListGroup.Item>
                        <ListGroup.Item>Tuna Time</ListGroup.Item>
                    </ListGroup>
                    
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Burgers</h3>
                        <ListGroup.Item>The Braised Bull Burger </ListGroup.Item>
                        <ListGroup.Item>Spicy Kicker</ListGroup.Item>
                        <ListGroup.Item>The Longhorn</ListGroup.Item>
                        <ListGroup.Item>Master Beef</ListGroup.Item>
                    </ListGroup>
                    
                    <ListGroup style={{paddingTop: '1em', paddingBottom: '1em'}}>
                        <h3>Snacks</h3>
                        <ListGroup.Item>Nachos</ListGroup.Item>
                        <ListGroup.Item>Quesadillas</ListGroup.Item>
                        <ListGroup.Item>Shrimp Tempura</ListGroup.Item>
                        <ListGroup.Item>FRESHAVACADO</ListGroup.Item>
                    </ListGroup>
                    
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

