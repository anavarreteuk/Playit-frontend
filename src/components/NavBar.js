import React, { Component } from "react";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link style={{ textDecoration: "none" }} to="/">
          <img id="logo" src={"./logo.png"} alt="logo" />
        </Link>
        {this.props.username ? (
          <Button>Hello, {this.props.username}</Button>
        ) : (
          ""
        )}
        {this.props.username ? (
          <Button onClick={this.props.signout}>Sign Out</Button>
        ) : (
          ""
        )}
        {this.props.username ? (
          ""
        ) : (
          <Link style={{ textDecoration: "none" }} to="/sign">
            <Button>Sign Up</Button>
          </Link>
        )}

        {this.props.username ? (
          ""
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button>Log In</Button>
          </Link>
        )}
        {this.props.username ? (
          <Link style={{ textDecoration: "none" }} to="/lessons">
            <Button>Lessons</Button>
          </Link>
        ) : (
          ""
        )}
        <Button>
          <ShoppingCartIcon />
          Cart
        </Button>
      </div>
    );
  }
}

export default NavBar;
