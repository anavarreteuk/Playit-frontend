import React from "react";
import Map from "./Map";

const mapContainer = (props) => {
  return (
    <Map
      geolocation={props.geolocation}
      teachers={props.teachers}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCqJW5IyRXAkcV37nYVYK3t80iKTgPtPXg&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%`, width: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default mapContainer;
