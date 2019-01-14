import React, { Component } from 'react'
import NavBar from './components/NavBar.js'
import SignUp from './components/SignUp.js'
import Main from './components/Main.js'
import LogIn from "./components/LogIn.js";
import Teachers from './components/Teachers.js'
import Availabilities from './components/Availabilities.js'
import Availability from './components/Availability.js'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"
import API from './components/API'
import SignUpTeacher from './components/SignUpTeacher'
import {Switch, Route,withRouter} from 'react-router-dom'

import './App.css'
import Lessons from './components/Lessons.js';
import Cart from './components/Cart.js';




class App extends Component {
  state = {
    username: '',
    userId:'',
    teachers: '',
    cardValue:'',
    searchValue:'',
    availabilities: [],
    student_login:[],
    loaded:false

  };

  callAvailabilities = (data) => {
    this.setState({ availabilities: [...data]})
  }

  login = student => { 
    localStorage.setItem('token', student.token)
    this.setState({ username: student.username, userId:student.userId });
    this.studentCall()
  };
  
  signout = () => {
    localStorage.removeItem('token')
    this.setState({ username: '' , userId:''});
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
      this.getLocation()

   
    
    }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
    }
  }
  showPosition = (position) => {
      let lat= parseFloat(position.coords.latitude)
      let lng= parseFloat(position.coords.longitude)
      this.setState( { geolocation:[{latitude: lat, longitude: lng}]})
  }

  fetchTeacher = () => {
    return fetch("http://localhost:3000/api/v1/teachers")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ teachers: [...data] });
      })
  }

    componentWillUpdate(){
      !this.state.loaded ?
        this.fetchTeacher().then(this.setState({ loaded: true })) :
        console.log('loaded')
    }

  teacherTrue =()=>{this.setState({loaded:false})}
    

  studentCall =() => {
  return fetch(`http://localhost:3000/api/v1/students/${this.state.userId}`)
      .then(resp => resp.json())
  .then(data => {
    this.setState({
      student_login: { ...data }
    })
  })}

  date = () => {
    const today = new Date(),
    date = today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear();
  return date}
  
  handleClick = (id) => { this.props.history.push(`/teachers/${id}/availabilities/31122018`)}
  handleCardValue = (event) => { this.setState({ cardValue: event.target.id }); this.props.history.push('/teachers')}
  handleSearch = (event) => { this.setState({ searchValue: event.target.value }) }
  handleSubmit = () => { this.setState({cardValue:this.state.searchValue}); this.setState({searchValue:''});this.props.history.push('/teachers')}
  


  render() {
    return <div className="App">
        <NavBar studentCall={this.studentCall} signout={this.signout} username={this.state.username} />
        <Switch>
        <Route exact path="/signup/teacher" component={routerProps => <SignUpTeacher teachertrue={this.teacherTrue} fetchteacher={this.fetchTeacher} {...routerProps} />} />

          <Route exact path="/sign" component={routerProps => <SignUp signin={this.signin} login={this.login} {...routerProps} />} />
          <Route exact path="/login" component={routerProps => <LogIn login={this.login} {...routerProps} />} />
          <Route exact path="/" component={routerProps => <Main test={this.state.searchValue} handleSubmit={this.handleSubmit} handleSearch={this.handleSearch} handleCardValue={this.handleCardValue} {...routerProps} />} />
        <Route exact path="/teachers" component={routerProps => <Teachers geolocation={this.state.geolocation} fetchteacher={this.fetchTeacher} callAvailabilities={this.callAvailabilities} handleClick={this.handleClick} cardValue={this.state.cardValue} teachers={this.state.teachers} {...routerProps} />} />
          <Route exact path="/lessons" component={routerProps => <Lessons studentLessons={this.state.student_login} username={this.state.username} studentCall={this.studentCall} {...routerProps} />} />
          <Route exact path="/cart" component={routerProps => <Cart studentId={this.state.userId} studentCall={this.studentCall} studentLessons={this.state.student_login} {...routerProps} />} />
          <Route exact path="/teachers/:id/availabilities/:date" component={routerProps => <Availabilities studentId={this.state.userId} availableState={this.state.availabilities} callAvailabilities={this.callAvailabilities} {...routerProps} />} />
          <Route exact path="/teachers/:id/availabilities/:date" component={routerProps => <Availability {...routerProps} />} />
          <Route component={() => <h1>Page not found</h1>} />
        </Switch>
        <ScrollUpButton />
      </div>;
  }
}

export default withRouter(App)
