import React from "react";
import Map from "./Map";

export default class MapContainer extends React.Component {

    render() {
        return <Map teachers={this.props.teachers} 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCqJW5IyRXAkcV37nYVYK3t80iKTgPtPXg&v=3.exp&libraries=geometry,drawing,places`} 
        loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `800px`, width: `800px` }} />}
         mapElement={<div style={{ height: `100%` }} />} />;
    }
}