import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import SignUp from './components/SignUp.js'
import Main from './components/Main.js'
import LogIn from "./components/LogIn.js";

import {Switch, Route} from 'react-router-dom'

import './App.css'




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
          <Route exact path="/" component={Main} />
        </Switch>
      </div>;
  }
}

export default App
