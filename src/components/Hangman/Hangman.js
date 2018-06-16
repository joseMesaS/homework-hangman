import * as React from 'react'



export default function Hangman(props) {
  if(!props.gameFinished) {
    return ((<div>
      <div className ='WelcomeHeader'>
        <h1>{ 'Take a guess!' }</h1>
      </div>
      <div className='WelcomeBody'>
        <h2>{props.wordShowcase}</h2>
        <p>Wrong Guess Count: {props.wrongCount}</p>
      </div>
    </div>))
  }else if(props.limitGuess){
    return (<div className ='WelcomeHeader'>
      <h1> You just hang yourself!</h1>
    </div>)
  }else if(props.isWinner){
    return (<div className ='WelcomeHeader'>
      <h1> You have won!!</h1>
    </div>)
  }




}
