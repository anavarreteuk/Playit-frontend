import React, { Component } from "react";
import ComplexGrid from './ComplexGrid.js'
import Map from './Map.js'

import "../App.css";

class Teachers extends Component {
  render() {
    return <div className="teachersAndMap">
        <div className="teachers">
          <h1>Teachers by instr</h1>
          <ComplexGrid />
          <ComplexGrid />
          
        </div>
        <div className="map">
          <Map />
        </div>
      </div>;
  }
}

export default Teachers;
