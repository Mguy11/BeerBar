import React, {Component} from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import Maps from './components/Maps'
import Contact from './components/Contact'
import FooterBlock from './components/Footer';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
        <Menu />
        <Maps />
        <Contact /> 
        <FooterBlock />     
      </div>
    );
  }
}

export default App;
