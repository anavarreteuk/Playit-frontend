import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import API from "./API.js";
import "../App.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    image: ""
  };

  handleSubmit = () => {
    const user = this.state;
    API.signup(user).then(data => {
    this.props.login(data);
    this.props.history.push("/");
    });
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password, email, image } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="userSignIn">
        <TextField
          //   fullWidth='true'
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
        <TextField
          id="emailInput"
          label="Email"
          value={email}
          onChange={handleChange}
          margin="normal"
          name="email"
         
        />
        <br />
        <TextField
          id="imageInput"
          label="Image"
          value={image}
          onChange={handleChange}
          margin="normal"
          name="image"
        
        />
        <br />

        <Button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    );
  }
}

export default Login;
