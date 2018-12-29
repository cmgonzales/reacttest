import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    console.log("constructor")
    this.state = {
      name: ""
    }
  }
  
    componentWillMount(){
      console.log("did mount")
      
      
    }
  
  render() {

    var name =  this.state.name
    console.log("render")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text"/>
          <h1></h1>
        </header>
      </div>
    );
  }
}

export default App;
