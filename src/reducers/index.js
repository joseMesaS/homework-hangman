import { combineReducers } from 'redux'
import LettersGuessedSoFar from './LettersGuessedSoFar'
import WordBeingGuessed from './WordBeingGuessed'


export default combineReducers({
  LettersGuessedSoFar,
  WordBeingGuessed
})
