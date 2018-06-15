import { combineReducers } from 'redux'
import LettersGuessed from './LettersGuessed'
import WordToGuess from './WordToGuess'


export default combineReducers({
  LettersGuessed,
  WordToGuess
})
