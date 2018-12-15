import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import SignUp from './components/SignUp.js'
import Main from './components/Main.js'
import LogIn from "./components/LogIn.js";
import Teachers from './components/Teachers.js'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

import {Switch, Route} from 'react-router-dom'

import './App.css'
import Lessons from './components/Lessons.js';




class App extends Component {
  state = {
    username: "",
    teachers: []
  };

  signin = username => {
    this.setState({ username });
  };
  
  signout = () => {
    this.setState({ username: "" });
  };

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/teachers')
  //   .then(resp=>resp.json())
  //   .then(data => {this.setState({
  //     teachers:[...data]
  //   })})
  // }

  render() {
    return <div className="App">
        <NavBar signout={this.signout} username={this.state.username} />
        <Switch>
          <Route exact path="/sign" component={signProps => <SignUp signin={this.signin} {...signProps} />} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/" component={Main} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/lessons" component={Lessons} />
          <Route component={() => <h1>Page not found</h1>} />
        </Switch>
        <ScrollUpButton />
      </div>;
  }
}

export default App
