import React, { Component } from "react";
import { NavLink } from "react-router-dom";


import Button from "@material-ui/core/Button";
import "../App.css";

class NavBar extends Component {
  render() {
    return <div className="NavBar">
      <NavLink style={{ textDecoration: "none" }} to="/">
          <img id="logo" src={"./logo.png"} alt="logo" />
      </NavLink>
        {this.props.username ? <Button>
            Hello, {this.props.username}
          </Button> : ""}
        {this.props.username ? <Button onClick={this.props.signout}>
            Sign Out
          </Button> : ""}
      {this.props.username ? "" : <NavLink style={{ textDecoration: "none" }} to="/sign">
            <Button>Sign Up</Button>
      </NavLink>}

      {this.props.username ? "" : <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button>Log In</Button>
          </NavLink>}
      {this.props.username ? <NavLink style={{ textDecoration: "none" }} to="/lessons">
            <Button onClick={this.props.studentCall}>My Lessons</Button>
          </NavLink> : ""}
      {this.props.username ? <NavLink style={{ textDecoration: "none" }} to="/cart">
        <Button //onClick={this.props.studentCall}
        >Cart</Button>
      </NavLink> : ""}
          
        {this.props.username ? <NavLink style={{ textDecoration: "none" }} to="/teachers">
            <Button>Teachers</Button>
          </NavLink> : ""}
      </div>;
  }
}

export default NavBar;
