import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import Picture from './components/Picture.js'
import Categories from './components/Categories.js'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar/>
       <Picture/>
        <Categories/>
      </div>
    );
  }
}

export default App
