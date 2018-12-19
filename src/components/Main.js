import Picture from "./Picture.js";
import Categories from "./Categories.js";
import React, { Component } from "react";
import HowWorks from './HowWorks.js'
import Footer from './Footer.js'

import "../App.css";

class Main extends Component {
  
  render() {
    
    return <div className="App">
        <Picture test={this.props.test} handleSubmit={this.props.handleSubmit} handleSearch={this.props.handleSearch} />
      <Categories handleCardValue={this.props.handleCardValue} />
        <HowWorks />
      <Footer />
      </div>;
  }
}

export default Main;