import React from 'react'

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
    .then(res=> this.setState({categories: res}))
  }

  render() {
    let output = Object.values(this.state.categories).map(c => <option className='category' value={c} onClick={this.setCat}>{c}</option>)

    return (
      <div className='category-list'>
        {output}
      </div>
    )
  }
}
