const NEW_GAME = 'NEW_GAME'
const MAKE_GUESS = 'MAKE_GUESS'


export function newGame(newWord) {
  return {
    type: NEW_GAME,
    payload: newWord
  }
}

export function makeGuess(newLetter) {
  return {
    type: MAKE_GUESS,
    payload: newLetter
  }
}
