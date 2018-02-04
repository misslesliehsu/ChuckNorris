import React, { Component } from 'react';
import './App.css';
import Starter from './Starter'
import SearchType from './SearchType'
import Categories from './Categories'
import Joke from './Joke'

class App extends Component {
  constructor() {
    super()
    this.state = {
      wantChuck: '',
      wantCat: '',
      chosenCat: ''
    }
  }

  handleWantChuck = (input) => {
    this.setState({wantChuck: input})
  }

  handleWantCat = (input) => {
    if (input === 'no') {
      this.setState({
        chosenCat: 'random',
        wantCat: ''
      })
    }
    else {
      this.setState({
        wantCat: input,
        chosenCat: ''
      })
    }
  }


  translateWant = (which) => {
    if (which === "wantGiphy") {
      return (this.state.wantChuck === 'no' ? "block" : "none")
    }
    else {
      return (this.state[which]==='yes' ? "block" : "none")
    }
  }

  setCat = (cat) => {
    this.setState({chosenCat: cat})
  }

  setJoke = (joke) => {
    this.setState({joke})
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

        <div style={{display: this.translateWant('wantCat')}}>
          <Categories setCat={this.setCat}></Categories><br></br><br></br>
        </div>

        <div style={{display: (this.state.joke === '' ? "none" : "block")}}>
          <Joke joke={this.state.joke} setJoke={this.setJoke}></Joke>
        </div>

      </div>
    )
  }
}

export default App;
