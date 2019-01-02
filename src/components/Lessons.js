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
      <h2>{this.props.studentLessons.map(value => value.date)}</h2>
      <h2>{this.props.studentLessons.map(value => value.teacher_id)}</h2>

      <h3>{this.props.studentLessons.map(value=> value.availability).map(value => value.time)}</h3>
      <h3>{this.props.studentLessons.map(value => value.availability).map(value => value.duration)}</h3>
      <LessonTable studentLessons={this.props.studentLessons}/> 
      </div>;
  }
}

export default Lessons;
