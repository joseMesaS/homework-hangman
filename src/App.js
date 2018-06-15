import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store.js'
import {Route} from 'react-router-dom'
import WelcomePageContainer from './components/WelcomePage/WelcomePageContainer.js'
import HangmanContainer from './components/Hangman/HangmanContainer.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <main>
            <Route exact path="/" component={WelcomePageContainer} />
            <Route exact path="/hangman" component={HangmanContainer} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
