import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import SignUp from './components/SignUp.js'
import Main from './components/Main.js'
import LogIn from "./components/LogIn.js";
import Teachers from './components/Teachers.js'
import Availabilities from './components/Availabilities.js'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"
import API from './components/API'
import {Switch, Route,withRouter} from 'react-router-dom'

import './App.css'
import Lessons from './components/Lessons.js';
import Cart from './components/Cart.js';




class App extends Component {
  state = {
    username: "",
    teachers: [],
    cardValue:'',
    searchValue:''
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
          // this.props.history.push('/')
        }
      })
    fetch('http://localhost:3000/api/v1/teachers')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          teachers: [...data]
        })
      })
  }
  date = () => {
    var today = new Date(),
    date = today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear();
  return date}
  
  handleClick = (id) => {this.props.history.push(`/teachers/${id}/availabilities/${this.date()}`)}
  handleCardValue = (event) => { this.setState({ cardValue: event.target.id }); this.props.history.push('/teachers')}
  handleSearch = (event) => { this.setState({ searchValue: event.target.value }) }
  handleSubmit = () => { this.setState({cardValue:this.state.searchValue}); this.setState({searchValue:''});this.props.history.push('/teachers')}
  


  render() {
    return <div className="App">
        <NavBar signout={this.signout} username={this.state.username} />
        <Switch>
          <Route exact path="/sign" component={routerProps => <SignUp signin={this.signin} login={this.login} {...routerProps} />} />
          <Route exact path="/login" component={routerProps => <LogIn login={this.login} {...routerProps}/>} />
          <Route exact path="/" component={routerProps => <Main test={this.state.searchValue} handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} handleCardValue={this.handleCardValue} {...routerProps}/>} />
          <Route exact path="/teachers" component={routerProps => <Teachers handleClick={this.handleClick} cardValue={this.state.cardValue}  teachers={this.state.teachers} {...routerProps}/>} />
          <Route exact path="/lessons" component={routerProps => <Lessons username={this.state.username} {...routerProps}/> } />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/teachers/:id/availabilities/:date" component={routerProps => <Availabilities {...routerProps}/> } />
          <Route component={() => <h1>Page not found</h1>} /> 
        </Switch>
        <ScrollUpButton />
      </div>;
  }
}

export default withRouter(App)
