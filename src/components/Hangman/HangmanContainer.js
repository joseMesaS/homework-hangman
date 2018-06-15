import * as React from 'react'
import Hangman from './Hangman'
import GuessLetterForm from '../GuessLetterForm/GuessLetterForm'
import * as Logic from  '../../GameLogic/game'
import {connect} from 'react-redux'
import {newGame} from '../../actions/game'


class HangmanContainer extends React.PureComponent {
  componentDidMount(){
    const w = Logic.randomWord()
    console.log(w)
    this.props.newGame(w)
  }

  render() {
    const WordBeingGuessed = this.props.WordBeingGuessed

    if(WordBeingGuessed==='') {
      return 'Loading...'
    }else {
      return <div><Hangman wordShowcase = {Logic.showGuess(WordBeingGuessed,this.props.LettersGuessedSoFar)}/><GuessLetterForm/></div>
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
