import Picture from "./Picture.js";
import Categories from "./Categories.js";
import React, { Component } from "react";
import HowWorks from './HowWorks.js'


import "../App.css";

class Main extends Component {
  
  render() {
    
    return <div className="App">
        <Picture test={this.props.test} handleSubmit={this.props.handleSubmit} handleSearch={this.props.handleSearch} />
      <Categories handleCardValue={this.props.handleCardValue} />
        <HowWorks />
      </div>;
  }
}

export default Main;