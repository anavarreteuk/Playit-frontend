import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import Picture from './components/Picture.js'
import Categories from './components/Categories.js'
import SignUp from './components/SignUp.js'
import {Switch, Route} from 'react-router-dom'

import './App.css'
import LogIn from './components/LogIn.js';



class App extends Component {
  
  state={
    teachers:[]
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/teachers')
  //   .then(resp=>resp.json())
  //   .then(data => {this.setState({
  //     teachers:[...data]
  //   })})
  // }


  render() {
    return <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/sign" component={SignUp} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path="/" component={Picture} />
          <Route exact path='/' component={Categories} />
        </Switch>
      </div>;
  }
}

export default App
