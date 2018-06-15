import * as React from 'react'
import {Link} from 'react-router-dom'


export default function WelcomePage(props) {
  return (<div>
    <div className ='WelcomeHeader'>
      <h1>Welcome To Hang the Man</h1>
    </div>
    <div className='WelcomeBody'>
      <Link to={ `/hangman`}>Start a Game</Link>
    </div>
  </div>)
}
