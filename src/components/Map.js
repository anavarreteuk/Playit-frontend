import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import TeacherMarker from "./TeacherMarker";

import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCRl6PvNq6l719iUq3re55GHN8aED14a_k");

const Map = withScriptjs(withGoogleMap((props) => {
    
    const markers = props.teachers.map( teacher => <TeacherMarker
        key={teacher.id}
        teacher={teacher}

        
        location={{lat:props.lat, lng:props.lng}}
        

    />)
    

    return <GoogleMap defaultZoom={11} center={{ lat: 51.5366, lng: -0.1058 }}>
        { markers }
      </GoogleMap>;
}
))

export default Map;