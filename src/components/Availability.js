import React from 'react'

export default class Availability extends React.Component {
    
    postLesson() {
        return fetch("http://localhost:3000/api/v1/lessons", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            date: this.props.date.match(/\d{2}(?=\d{4,6})|\d+/g).join("/") ,
            name: "music class",
            teacher_id: this.props.avail.teacher_id,
            student_id: 5,
            availability_id: this.props.avail.id
          })
        }).then(resp => resp.json())
            
            
    }
    
  render() {
    return <div className="availability">
        <h2>{this.props.avail.day}</h2>
        
        <h2>{this.props.avail.duration} minutes</h2>
        <h2>{this.props.avail.time}</h2>
      <h1>{this.props.avail.booked ? "Unavailable" : "Available"}</h1>
        {this.props.avail.booked ? '' : <button onClick={()=>this.postLesson(this.props.avail.id,this.props.avail.teacher_id)}>Book a lesson</button> }
      </div>;
  }
}
