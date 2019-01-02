import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    console.log("constructor")
    this.state = {
      value: ""
    }
      this.handlchange = this.handlechange.bind(this)
    
  }
  

    handlechange(e){
    this.setState({value: e.target.value})
    }
  
  render() {


    console.log("render")
    return (
      <div className="App">
          <label>
            name
          <input type="text" value = {this.state.value} onChange = {this.handlechange}  />

          <h1 value = {this.state.value}></h1>
          </label>
      </div>
    );
  }
}

export default App;
