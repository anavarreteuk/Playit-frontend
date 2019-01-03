import React, { Component } from "react";

import "../App.css";
import LessonTable from "./LessonTable";

class Lessons extends Component {

state = {
loaded: false,
}

componentDidMount () {
    if(!this.props.username) {
        this.props.history.push('/sign')
    }
}

  render() {
    
    return <div className="lessonWrapper">
        <h1>My lessons</h1>
        <div className='myLessons'>
      <LessonTable studentLessons={this.props.studentLessons}/> 
        </div>
      </div>;
  }
}

export default Lessons;
