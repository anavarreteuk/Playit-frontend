import React, { Component } from "react";
import "../App.css";

class Picture extends Component {
  
  render() {
    return <div>
        <img id="mainPicture" src="pianist3.jpg" alt="home" />
        <div className='textpicturewrapper'>
          <h1 id="picText">What would you like to learn today?</h1>
          <h2 id="picTextSub">
            Search for teachers for local lessons
          </h2>
        </div>
        <div className='formCss'>
          <input autoFocus={true} id="form" onChange={this.props.handleSearch} type="text" placeholder="Type of Lesson" value={this.props.test} />
          <button onClick={this.props.handleSubmit} id="submit">
            Search for your lesson{" "}
          </button>
        </div>
      </div>;
  }
}

export default Picture;
