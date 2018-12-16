import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import SignUp from './components/SignUp.js'
import Main from './components/Main.js'
import LogIn from "./components/LogIn.js";
import Teachers from './components/Teachers.js'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"
import API from './components/API'
import {Switch, Route,withRouter} from 'react-router-dom'

import './App.css'
import Lessons from './components/Lessons.js';
import Cart from './components/Cart.js';




class App extends Component {
  state = {
    username: "",
    teachers: []
  };

  login = student => {
    localStorage.setItem('token', student.token)
    this.setState({ username: student.username });
  };
  
  signout = () => {
    localStorage.removeItem('token')
    this.setState({ username: "" });
    this.props.history.push("/");
  };
  componentDidMount() {
    API.validate()
      .then(data => {
        if (data.error) {
          this.signout()
        } else {
          this.login(data)
          this.props.history.push('/')
        }
      })
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
        <NavBar signout={this.signout} username={this.state.username} />
        <Switch>
        <Route exact path="/sign" component={routerProps => <SignUp signin={this.signin} login={this.login} {...routerProps} />} />
          <Route exact path="/login" component={routerProps => <LogIn login={this.login} {...routerProps}/>} />
          <Route exact path="/" component={routerProps => <Main {...routerProps}/>} />
          <Route exact path="/teachers" component={routerProps => <Teachers {...routerProps}/>} />
          <Route exact path="/lessons" component={routerProps => <Lessons username={this.state.username} {...routerProps}/> } />
          <Route exact path="/cart" component={Cart} />
          <Route component={() => <h1>Page not found</h1>} /> 
        </Switch>
        <ScrollUpButton />
      </div>;
  }
}

export default withRouter(App)
