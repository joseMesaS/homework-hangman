import * as React from 'react'
import Hangman from './Hangman'
import GuessLetterForm from '../GuessLetterForm/GuessLetterForm'
import * as Logic from  '../../GameLogic/game'
import {connect} from 'react-redux'
import {newGame} from '../../actions/game'
import {Button} from 'react-bootstrap'
import './Hangman.css'


class HangmanContainer extends React.PureComponent {

  componentDidMount(){
    this.startNewGame()
  }

  startNewGame =() => {
    const randomword = Logic.randomWord()
    this.props.newGame(randomword)
  }

  render() {
    const WordBeingGuessed = this.props.WordBeingGuessed
    const LettersGuessedSoFar = this.props.LettersGuessedSoFar

    if(WordBeingGuessed==='') {
      return 'Loading...'
    }else {
      return <div className = 'gameArea'>
        <Hangman wordShowcase = {Logic.showGuess(WordBeingGuessed,LettersGuessedSoFar)}
          wrongCount = {Logic.wrongGuessCount(WordBeingGuessed, LettersGuessedSoFar)}
          isWinner={Logic.isWinner(WordBeingGuessed,LettersGuessedSoFar)}
          limitGuess={Logic.wrongGuessLimit(WordBeingGuessed,LettersGuessedSoFar)}
          gameFinished={Logic.gameFinished(WordBeingGuessed,LettersGuessedSoFar)}/>
        {!Logic.gameFinished(WordBeingGuessed,LettersGuessedSoFar)&&<GuessLetterForm/>}
        <Button id='newGameButton' onClick = {this.startNewGame}>Start New Game</Button>
      </div>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    WordBeingGuessed:state.WordBeingGuessed,
    LettersGuessedSoFar:state.LettersGuessedSoFar
  }
}

export default connect(mapStateToProps, {newGame} )(HangmanContainer)
