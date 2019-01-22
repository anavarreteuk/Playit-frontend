import React, { Component } from "react";
import { Link } from "react-router-dom";



import "../App.css";

class NavBar extends Component {
  render() {
    return <nav className="NavBar">
      <Link style={{ textDecoration: "none" }} to="/">
          <img id="logo" src={"./logo4.png"} alt="logo" />
      </Link>
      <ul className="nav-list">
        {this.props.username ? <span id='name'>
            Hello, {this.props.username}
          </span> : ""}
        {this.props.username ? <span onClick={this.props.signout}>
            Sign Out
          </span> : ""}
      {this.props.username ? "" : <li><Link style={{ textDecoration: "none" }} to="/sign">
            <span>Sign Up</span>
        </Link></li>}

      {this.props.username ? "" : <li><Link style={{ textDecoration: "none" }} to="/login">
            <span>Log In</span>
        </Link></li>}
      {this.props.username ? <li><Link style={{ textDecoration: "none" }} to="/cart">
            <span  onClick={this.props.studentCall}>My Lessons</span>
        </Link></li> : ""}
     
          
        {this.props.username ? <li><Link style={{ textDecoration: "none" }} to="/teachers">
          <span id="navless">Teachers</span>
        </Link></li> : ""}
      </ul>
      </nav>;
  }
}

export default NavBar;
