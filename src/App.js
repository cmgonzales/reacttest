import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    console.log("constructor")
    this.state = {
      value: ""
    }
      this.handleclick = this.handleclick.bind(this)
    
  }
  
    componentWillMount(){
      console.log("did mount")
      
      
    }

    handleclick(e){
    this.setState = ({value: e.target.value})
    }
  
  render() {


    console.log("render")
    return (
      <div className="App">
          <label>
            name
          <input type="text" value = {this.state.value} onChange = {this.handleclick}  />

          <h1 value = {this.state.value}></h1>
          </label>
      </div>
    );
  }
}

export default App;
