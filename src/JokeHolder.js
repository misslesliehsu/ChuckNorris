import React from 'react'
import Joke from './Joke'

export default class JokeHolder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      joke: ''
    }
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.chosenCat === 'random') {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(res=>res.json())
        .then(res=>this.setState({joke: res.value}))
    }
    else if (nextProps.chosenCat !== '') {
      fetch(`https://api.chucknorris.io/jokes/random?category=${nextProps.chosenCat}`)
      .then(res=>res.json())
      .then(res=>this.setState({joke: res.value}))
    }
  }


  render() {
    return(
      <div>
        <Joke joke={this.state.joke}></Joke>
      </div>
    )
  }

}
