import React from "react";
import Map from "./Map";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCRl6PvNq6l719iUq3re55GHN8aED14a_k");
export default class MapContainer extends React.Component {

state={
    mark:{},
    loaded:false,
    lat:'',
    lng:''
}

 adsasdf = () => {
     this.props.teachers.map(teacher => Geocode.fromAddress(teacher.location).then(
         response => {
             const { lat, lng } = response.results[0].geometry.location;
            console.log(lat)
             this.setState({ lat: lat, lng: lng });
         },
         error => {
             console.error(error);
         }
     ))
      
     
 }
    // componentDidMount() {
    //     !this.state.loaded ?
    //         this.honolulu():
    //         (this.setState({ loaded: true })) 
    //         console.log('loaded')
    // }

    honolulu = () => {
        this.props.teachers.map(teacher =>  Geocode.fromAddress(teacher.location).then(
                response => { 

                     const { lat, lng } = response.results[0].geometry.location
                     this.setState({lat})

                }
            ))
        
    }
    render() {
        return <Map lat={this.state.lat} lng={this.state.lng} honolulu={this.honolulu} teachers={this.props.teachers} 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCqJW5IyRXAkcV37nYVYK3t80iKTgPtPXg&v=3.exp&libraries=geometry,drawing,places`} 
        loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `100%`, width: `100%` }} />}
         mapElement={<div style={{ height: `100%` }} />} />;
    }
}  