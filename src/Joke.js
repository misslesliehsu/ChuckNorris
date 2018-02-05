import React from 'react'


export default class Joke extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: ''
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.chosenCat === 'random') {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(res=>res.json())
        .then(res=>this.setState({joke:res.value}))
    }
    else if (nextProps.chosenCat !== '') {
      fetch(`https://api.chucknorris.io/jokes/random?category=${nextProps.chosenCat}`)
      .then(res=>res.json())
      .then(res=>this.setState({joke:res.value}))
    }
    else if (nextProps.chosenCat === '') {
      this.setState({joke: ''})
    }
  }

  shouldComponentUpdate(nextState, nextProps) {
    if (this.props.chosenCat !== '' && this.props.chosenCat !== 'random' && nextProps.chosenCat === 'random') return false
    else {return true}
  }


  render() {
    return(
      <div className='joke'>
        {this.state.joke}
      </div>
    )
  }


}
