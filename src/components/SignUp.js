import React, { Component } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import API from "./API.js"
import "../App.css"

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = () => {
    const user = this.state
    API.signin(user).then(data => {
      if (data.error) {
        alert("wrong")
      } else {
        this.props.signin(data.username)
        this.props.history.push('/')
      }
    })
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state
    const { handleChange, handleSubmit } = this;
    return (
      <div className="userSignIn">
        <TextField
          id="usernameInput"
          label="Username"
          value={username}
          onChange={handleChange}
          margin="normal"
          name="username"
        />
        <br />
        <TextField
          id="passwordInput"
          label="Password"
          value={password}
          onChange={handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />

        <Button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    )
  }
}

export default SignUp;
