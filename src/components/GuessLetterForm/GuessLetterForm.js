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
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <label>
        Enter a Letter:
        <input type="text" name="letter" value={this.state.letter} onChange={this.handleChange} required />
      </label>
      <button type="submit">Guess</button>
      {this.state.letter.length>1 && <p>'You can only guess one letter at a time'</p>}
    </form>)
  }
}



export default connect(null, {makeGuess} )(GuessLetterForm)
