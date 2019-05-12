import React, {Component} from 'react';
import './App.css';

import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
        <Menu />
        
      </div>
    );
  }
}

export default App;
