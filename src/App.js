import React, { Component } from 'react';
import './App.css';
import Starter from './Starter'
import SearchType from './SearchType'
import Joke from './Joke'

class App extends Component {
  constructor() {
    super()
    this.state = {
      wantChuck: ''
    }
  }

  handleWantChuck = (input) => {
    this.setState({wantChuck: input})
  }


  translateWant = (which) => {
    if (which === "wantGiphy") {
      return (this.state.wantChuck === 'no' ? "block" : "none")
    }
    else {
      return (this.state[which]==='yes' ? "block" : "none")
    }
  }


  render() {
    return (
      <div className="App">
        <Starter handleWantChuck={this.handleWantChuck}></Starter><br></br><br></br>

        <div style={{display: this.translateWant('wantChuck')}}>
          <SearchType handleWantCat={this.handleWantCat}></SearchType><br></br><br></br>
        </div>

        <div style={{display: this.translateWant('wantGiphy')}}>
          <h1>Bad Decision</h1>
          <img src='https://media.giphy.com/media/l1J3nY7N7LBrBobVm/giphy.gif'></img>
        </div>

      </div>
    )
  }

}

export default App;
