import React from 'react'
import API from './API.js'
export default class Availabilities extends React.Component {
  constructor() {
    super();

    var today = new Date(),
      date = today.getDate()+''+ (today.getMonth() + 1)  +''+ today.getFullYear();
    console.log(date)
    this.state = {
      date: date,
      availabilities:[]
    };
  }
   
  
   

   componentDidMount(){
     
     API.availabilities(this.props.match.params.id, this.state.date)
    .then(data=> this.setState({availabilities:[...data]}))
  }
   
  
  
  render() {
    return (
      <div><h2>Hello</h2>
        
        <h3>{this.state.availabilities.map(a => a.duration)}</h3>
        <h3>{this.state.availabilities.map(a => a.booked ? 'Available': 'Unavailable')}</h3>
       </div>
      

    )
  }
}
