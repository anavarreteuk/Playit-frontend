import React, { Component } from "react";

import "../App.css";
import LessonTable from "./LessonTable";

class Lessons extends Component {

componentDidMount () {
    if(!this.props.username) {
        this.props.history.push('/sign')
    }

}

  render() {
    
    return <div className="App">
        <h1>My lessons</h1>
      <LessonTable studentLessons={this.props.studentLessons} time={this.props.studentLessons.map(value => value.availability)}/> 
      </div>;
  }
}

export default Lessons;
