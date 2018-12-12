import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import Picture from './components/Picture.js'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <Picture/>
        <p>Hello</p>
      </div>
    );
  }
}

export default App
