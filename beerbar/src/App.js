import React, { Component } from 'react';
import './App.css';


import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import Maps from './components/Maps'
import FooterBlock from './components/Footer';
import ControlledCarousel from './components/Carousel';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: window.pageYOffset,
      childRefs: [0,],
      class: 'navbar navbar-expand-lg middle'
    }
  }

  render() {
    return (
      <div className="App">
        
        <Header />
        <NavBar getClass={this.state.class} />
        <About getRef={this.getRef} />
        <ControlledCarousel getRef={this.getRef} />
        <Menu getRef={this.getRef} />
        <Maps getRef={this.getRef} />
        <FooterBlock />
      </div>
    );
  }

  handleScroll = () => {
    let navClass = "navbar navbar-expand-lg ";
    let heights = this.state.childRefs;
    let windowPosition = window.innerHeight + window.pageYOffset;
    if (window.innerWidth < 800) {
      navClass += "middle";
    } else {
      if (windowPosition > heights[1] && windowPosition < heights[2]) {
        navClass += "right"
      } else if (windowPosition > heights[2] && windowPosition < heights[3]) {
        navClass += "left"
      } else if (windowPosition > heights[3]) {
        navClass += "right"
      } else {
        navClass += "middle"
      }
    }

    this.setState({ class: navClass });
  };

  getRef = (offsetTop) => {
    this.state.childRefs.push(offsetTop)
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll)
  }
}


