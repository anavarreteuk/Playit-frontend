import React from "react";
import "../App.css";
import pic from "../picturesComponents/pianist3.jpg";

const Picture = props => {
  return (
    <div>
      <img id="mainPicture" src={pic} alt="home" />
      <div className="textpicturewrapper">
        <h1 id="picText">What would you like to learn today?</h1>
        <h2 id="picTextSub">Search for teachers for local lessons</h2>
      </div>
      <div className="formCss">
        <input
          autoFocus={true}
          id="form"
          onChange={props.handleSearch}
          type="text"
          placeholder="Type of Lesson"
          value={props.test}
        />
        <button onClick={props.handleSubmit} id="submit">
          Search for your lesson{" "}
        </button>
      </div>
    </div>
  );
};

export default Picture;
