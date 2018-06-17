import * as React from 'react'
import {connect} from 'react-redux'
import {makeGuess} from '../../actions/game'
import {ControlLabel,Form, FormControl, FormGroup, HelpBlock, Button } from 'react-bootstrap'
import './GuessLetterForm.css'

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
    this.setState({ letter: e.target.value })
  }

  getValidationState = () => {
    const length = this.state.letter.length
    if (length === 0 ) return null
    else if (length === 1) return 'success'
    else if (length >1) return 'error'
  }

  buttonColor = () => {
    const length = this.state.letter.length
    if (length === 0 ) return 'info'
    else if (length === 1) return 'success'
    else if (length >1) return 'danger'
  }

  render() {
    return (<Form inline onSubmit={this.handleSubmit} >
      <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Enter a Letter: </ControlLabel>{' '}
        <FormControl type="text" value={this.state.letter} onChange={this.handleChange} placeholder="Enter a letter" required/>
        <FormControl.Feedback />
        <HelpBlock>You should guess only a letter a at time.</HelpBlock>
      </FormGroup>
      <Button id="submitButton" type="submit" bsStyle={this.buttonColor()} disabled={this.state.letter.length===0} >Guess</Button>
    </Form>)
  }
}



export default connect(null, {makeGuess} )(GuessLetterForm)
