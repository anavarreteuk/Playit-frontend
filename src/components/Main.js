import Picture from "./Picture.js";
import Categories from "./Categories.js";
import React from "react";
import HowWorks from "./HowWorks.js";
import Footer from "./Footer.js";

import "../App.css";

const Main = (props) => {
  return (
    <div className="App">
      <Picture
        test={props.test}
        handleSubmit={props.handleSubmit}
        handleSearch={props.handleSearch}
      />
      <Categories handleCardValue={props.handleCardValue} />
      <HowWorks />
      <Footer />
    </div>
  );
};

export default Main;
