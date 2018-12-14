import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink to="/">
          <img id="logo" src={"./logo.png"} alt="logo" />
        </NavLink>
        <NavLink to="/sign">
          <Button>Sign Up</Button>
        </NavLink>
        <NavLink to='/login'><Button>Log In</Button></NavLink>
        <Button>Lessons</Button>
        <Button>
          <ShoppingCartIcon />
          Cart
        </Button>
      </div>
    );
  }
}

export default NavBar;
