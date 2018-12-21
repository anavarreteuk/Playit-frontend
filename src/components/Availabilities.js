import React from 'react'
import API from './API.js'
export default class Availabilities extends React.Component {
  
    
    state = {
      availabilities:[]
    }
  
   componentDidMount(){
     API.availabilities(this.props.match.params.id, this.props.match.params.date)
    .then(data=> this.setState({availabilities:[...data]}))
  }
  
  
  
  render() {
    return <div>
      <h2>{this.state.availabilities.map(a => a.teacher_id)}</h2>

        <h3>{this.state.availabilities.map(a => a.duration)}</h3>
        <h3>
          {this.state.availabilities.map(a =>
            a.booked ? "Unavailable" : "Available"
          )}
        </h3>
      </div>;
  }
}
