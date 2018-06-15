import * as React from 'react'
import {connect} from 'react-redux'
import {makeGuess} from '../../actions/game'

class GuessLetterForm extends React.PureComponent {
  state = {letter: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.letter) {
      console.log(this.state.letter)
      this.props.makeGuess(this.state.letter)
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        Enter a Letter:
        <input type="text" name="letter" value={this.state.letter} onChange={this.handleChange} />
      </label>
      <button type="submit">Guess</button>
    </form>)
  }
}



export default connect(null, {makeGuess} )(GuessLetterForm)
