export default (state = [], action = {}) => {
  switch (action.type) {
  case 'NEW_GAME':
    return []
  case 'MAKE_GUESS':
    return action.payload
  default:
    return state
  }

}
