import * as React from 'react'
import {Link} from 'react-router-dom'


export default function WelcomePage(props) {
  return (<div>
    <div>
      <h1>Welcome To Hang_the_Man</h1>
    </div>
    <div>
      <Link to={ `/hangman`}>Start playing!</Link>
    </div>
  </div>)
}
