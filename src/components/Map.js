import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import DoctorMarker from "./DoctorMarker";

const Map = withScriptjs(withGoogleMap((props) => {

    // const markers = props.doctors.map(doctor => <DoctorMarker
    //     key={doctor.uid}
    //     doctor={doctor}
    //     location={{ lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon }}
    // />);

    return <GoogleMap defaultZoom={10} center={{ lat: 51.5074, lng: 0.1278 }}>
        {/* {markers} */}
      </GoogleMap>;
}
))

export default Map;