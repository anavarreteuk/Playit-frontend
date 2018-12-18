import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import TeacherMarker from "./TeacherMarker";

const Map = withScriptjs(withGoogleMap((props) => {
    
    const markers = props.teachers.map( teacher => <TeacherMarker
        key={teacher.id}
        teacher={teacher}
        location={{ lat: parseFloat(teacher.lat), lng: parseFloat(teacher.lng) }}
    />)
    

    return <GoogleMap defaultZoom={10} center={{ lat: 51.5366, lng: 0.0758 }}>
        { markers }
      </GoogleMap>;
}
))

export default Map;