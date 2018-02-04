import React from 'react'


const searchType = (props) => {

  const handleWantCat = (e) => {
    props.handleWantCat(e.target.value)
  }

  return (
    <div>
      <h2>Do you want to pick your own fact category, or get a random hit?</h2>
      <form onChange={handleWantCat}>
        Choose My Own<input name='wantCat' type='radio'value='yes'></input>
      <br></br>Hit Me<input name='wantCat' type='radio'value='no'></input>
      </form>
    </div>
  )
}
export default searchType
