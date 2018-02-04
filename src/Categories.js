import React from 'react'
import JokeHolder from './JokeHolder'

export default class Categories extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: ''
    }
  }

  setCat = (e) => {
    this.props.setCat(e.target.value)
  }

  componentWillMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(res=>res.json())
    .then(res=> this.setState({
      categories: res
    }))
  }

  render() {
    const output = Object.values(this.state.categories).map(c =>
      <option value={c} onClick={this.setCat}>{c}</option>
    )

    return(
      <div>
        {output}
      </div>
    )
  }

}
