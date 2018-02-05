import React from 'react'
import Categories from './Categories'
import Joke from './Joke'

export default class SearchType extends React.Component {
  constructor() {
    super()
    this.state = {
      chosenCat: '',
      showCats: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.chosenCat !== nextState.chosenCat) || (this.state.showCats !== nextState.showCats)
  }

  handleCat = (e) => {
    //user chose 'hit me'
    if (e.target.value ==='Hit Me') {
      this.setState({
        chosenCat: 'random',
        showCats: 'no'
      })
    }
    //user chose 'choose my own'
    else {this.setState({
      showCats: 'yes',
      chosenCat: ''
    })}
  }

  showCats = () => {
    if (this.state.showCats === 'yes') {
      return "block"
    }
    else {return "none"}
  }

  setCat = (input) => {
    this.setState({
      chosenCat: input,
      showCats: 'no'})
  }

  showOption = (input) => {
    if (input === 'pick') {return this.state.chosenCat !== '' ? "none" : "block"}
    else {
      return this.state.chosenCat === '' ?  "none" : "block"
    }
  }

  resetJoke = () => {
    this.setState({chosenCat: ''})
  }

  render() {
    return (
      <div>
        <div style={{display:this.showOption('pick')}}>
          <h2>Do you want to pick your own fact category, or get a random hit?</h2>
          <form onClick={this.handleCat}>
            <input name='wantCat' type='button'value='Choose My Own'></input>
          <br></br><input name='wantCat' type='button'value='Hit Me'></input>
          </form>
        </div>
        <div style={{display:this.showCats()}}>
          <Categories setCat={this.setCat}></Categories>
        </div>
        <br></br><br></br><Joke chosenCat={this.state.chosenCat}></Joke>
        <br></br><br></br>
        <div className='another' style={{display:this.showOption('another')}}>
            <button onClick={this.resetJoke}>Another Fact Please</button>
        </div>
      </div>
    )
  }


}
