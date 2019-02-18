import React from "react";
import { Marker } from "react-google-maps";
import music from "../picturesComponents/music-player.png";

const TeacherMarker = (props) => {
  return <Marker position={props.location} icon={music} />;
};

export default TeacherMarker;
