import React, { Component } from "react";
import "../App.css";

class Picture extends Component {
  
  render() {
    return (
      <div>
        <img
          id="mainPicture"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Martha_Argerich_concierto.jpg/1200px-Martha_Argerich_concierto.jpg"
          }
          alt="home"
        />
        <h1 id="picText">What would you like to learn today?</h1>
        <h2 id="picTextSub">
          Search thousands of teachers for local and online lessons
        </h2>
        <div>
          <input
            autoFocus={true}
            id="form"
            onChange={this.props.handleSearch}
            type="text"
            placeholder="Type of Lesson"
            value={this.props.test}
          />
          <button onClick={this.props.handleSubmit} id="submit">Search for your lesson </button>
        </div>
      </div>
    );
  }
}

export default Picture;
