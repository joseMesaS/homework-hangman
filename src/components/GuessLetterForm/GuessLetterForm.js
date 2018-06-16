import * as React from 'react'
import {connect} from 'react-redux'
import {makeGuess} from '../../actions/game'

class GuessLetterForm extends React.PureComponent {
  state = {letter: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.letter.length === 1) {
      this.props.makeGuess(this.state.letter.toLowerCase())
      this.setState({ letter: '' })
    }else if(this.state.letter.length > 1) {

    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        Enter a Letter:
        <input type="text" name="letter" value={this.state.letter} onChange={this.handleChange} required maxlength="1"/>
      </label>
      <button type="submit">Guess</button>
    </form>)
  }
}



export default connect(null, {makeGuess} )(GuessLetterForm)
