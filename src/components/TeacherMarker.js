import React from "react";
import { Marker } from "react-google-maps";
import music from '../music-player.png'

export default class TeacherMarker extends React.Component {

    render() {
        return <Marker position={this.props.location} 
        icon={music}/>;
    }
}