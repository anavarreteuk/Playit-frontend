import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <Link style={{ textDecoration: "none" }} to="/">
        <img id="logo" src={"./logo4.png"} alt="logo" />
      </Link>
      <ul className="nav-list">
        {props.username ? (
          <span id="name">Hello, {props.username}</span>
        ) : (
          ""
        )}
        {props.username ? (
          <span onClick={props.signout}>Sign Out</span>
        ) : (
          ""
        )}
        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/sign">
              <span>Sign Up</span>
            </Link>
          </li>
        )}

        {props.username ? (
          ""
        ) : (
          <li>
            <Link style={{ textDecoration: "none" }} to="/login">
              <span>Log In</span>
            </Link>
          </li>
        )}
        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/cart">
              <span onClick={props.studentCall}>My Lessons</span>
            </Link>
          </li>
        ) : (
          ""
        )}

        {props.username ? (
          <li>
            <Link style={{ textDecoration: "none" }} to="/teachers">
              <span id="navless">Teachers</span>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
