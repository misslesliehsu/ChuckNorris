import React from 'react'

const starter = (props) => {

  const handleWantChuck = (e) => {
    props.handleWantChuck(e.target.value)
  }

  return(
    <div>
      <h1>Want to Hear an Important Fact about Chuck Norris?</h1>
      <form onChange={handleWantChuck}>
        YES<input name='wantNorris' type='radio'value='yes'></input>
      <br></br>NO<input name='wantNorris' type='radio'value='no'></input>
      </form>
    </div>
  )
}

export default starter
