import React, { Component } from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import "../App.css";

class NavBar extends Component {
  render() {
    return <div className="NavBar">
      <Link style={{ textDecoration: 'none' }} to="/">
          <img id="logo" src={"./logo.png"} alt="logo" />
        </Link>
        <Link style={{ textDecoration: "none" }} to="/sign">
          <Button>Sign Up</Button>
        </Link>
      <Link style={{ textDecoration: 'none' }} to="/login">
          <Button>Log In</Button>
        </Link>
        <Button>Lessons</Button>
        <Button>
          <ShoppingCartIcon />
          Cart
        </Button>
      </div>;
  }
}

export default NavBar;
