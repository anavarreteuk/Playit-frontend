import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import TeacherMarker from "./TeacherMarker";
import MyMarker from "./MyMarker"

const Map = withScriptjs(withGoogleMap((props) => {
    console.log(props)
    const markers = props.teachers.map( teacher => <TeacherMarker
        key={teacher.id}
        teacher={teacher}
        location={{ lat: parseFloat(teacher.latitude), lng: parseFloat(teacher.longitude) }}
    />)
    
    const myMarker = props.geolocation.map((value,index) => <MyMarker
        
        key={index}
        location={{ lat: value.latitude, lng: value.longitude }}
    />)
    

    return <GoogleMap defaultZoom={11} center={{ lat: 51.5366, lng: -0.1058 }}>
        { markers }
        { myMarker }
      </GoogleMap>;
}
))

export default Map;