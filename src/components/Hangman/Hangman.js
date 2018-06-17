import * as React from 'react'




export default function Hangman(props) {
  if(!props.gameFinished) {
    return (<div className= 'outputBody'>
      <div className ='messageHeader'>
        <h1> Make a Guess!! </h1>
      </div>
      <div className='WelcomeBody'>
        <h3>{props.wordShowcase}</h3>
        <p>Wrong Guess Count: {props.wrongCount}</p>
      </div>
    </div>)
  }else if(props.limitGuess){
    return (<div className ='messageHeaderLoser'>
      <h1> You just hang yourself!</h1>
    </div>)
  }else if(props.isWinner){
    return (<div className ='messageHeaderWiner'>
      <h1> You have won!!</h1>
    </div>)
  }




}
