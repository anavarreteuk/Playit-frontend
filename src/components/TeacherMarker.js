import React from "react";
import { Marker } from "react-google-maps";


export default class TeacherMarker extends React.Component {

    render() {
        return <Marker position={this.props.location} 
        onClick={this.props.onToggleOpen} />;
    }
}