import * as React from 'react'
import Hangman from './Hangman'
import GuessLetterForm from '../GuessLetterForm/GuessLetterForm'

export default class HangmanContainer extends React.PureComponent {


  render() {
    return <div>
      <Hangman />
      <GuessLetterForm/>
    </div>
  }
}
