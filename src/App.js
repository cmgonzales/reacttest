import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props)

    console.log("constructor")

    this.state = {
      value: "",
      name: "",
      result: ""
    }
    this.handlechange = this.handlechange.bind(this)
    this.random = this.random.bind(this)


  }

  handlechange(e) {
    this.setState({ value: e.target.value })

  }

  random() 
  {
 var  x = Math.floor((Math.random() * 10) + 1)

    this.setState({
      name: x
    })
    if (x === this.state.value) 
    {
      this.setState({
          result: "You got it right"
      })
    }
  }

  render() {

    return (
      <div className="App">
        <label>
          <h2>Please pick a number between 1 - 10</h2>
          <input type="number" value={this.state.value} onChange={this.handlechange} />
          <button onClick={this.random} >submit</button>
          <h1>{this.state.value}</h1>
          <h2>{this.state.name}</h2>
          <h1>{this.state.result}</h1>
        </label>
      </div>
    );
  }
}

export default App;
