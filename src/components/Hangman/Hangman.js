import * as React from 'react'



export default function Hangman(props) {
  return (<div>
    <div className ='WelcomeHeader'>
      <h1>Welcome To Hang the Man</h1>
    </div>
    <div className='WelcomeBody'>
      <h2>{props.wordShowcase}</h2>
      <p>Wrong Guess Count: {props.wrongCount}</p>
    </div>
  </div>)
}
