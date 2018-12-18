import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from "react-google-maps";
import TeacherMarker from "./TeacherMarker";

const Map = withScriptjs(withGoogleMap((props) => {
    
    const markers = props.teachers.map( teacher => <TeacherMarker
        key={teacher.id}
        teacher={teacher}
        location={{ lat: 51.4, lng: 0.12 }}
    />)
    

    return <GoogleMap defaultZoom={10} center={{ lat: 51.5074, lng: 0.1278 }}>
        { markers }
      </GoogleMap>;
}
))

export default Map;