import React from 'react'

const joke = (props) => {

  return (
    <div>
      <h3 className='joke'>{props.joke}</h3>
    </div>
  )
}

export default joke


//
//   const joke = (props) => {
//     if (props.chosenCat === 'random') {
//       fetch('https://api.chucknorris.io/jokes/random')
//         .then(res=>res.json())
//         .then(res=>{props.setJoke(res.value)})
//     }
//     else if (props.chosenCat !== '') {
//       fetch(`https://api.chucknorris.io/jokes/random?category=${props.chosenCat}`)
//       .then(res=>res.json())
//       .then(res=>{props.setJoke(res.value)})
//     }
//
//     return(
//       <div>
//         {props.joke}
//       </div>
//     )
//
//   }
//
// export default joke
