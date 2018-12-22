import React from 'react'
import API from './API.js'
import Availability from './Availability.js'

export default class Availabilities extends React.Component {
  
    
    state = {
      availabilities:[]
    }
  
   componentDidMount(){
     this.caller()                
  }
  
  caller=()=>{
  API.availabilities(this.props.match.params.id, this.props.match.params.date)
  .then(data=> this.setState({ availabilities: [...data] }))}
    
  reverse=()=> {
    let a= this.props.match.params.date.slice(0,2)
    let b = this.props.match.params.date.slice(2,4)
    let c = this.props.match.params.date.slice(4,8)
    let d = c + b + a
    const e =d.match(/\d{4}(?=\d{0,2})|\d+/g).join(",")
    return e.substr(0, 7) + "," + e.substr(7);
    }
    
  todayDays = () => {
    let result = new Date(this.reverse());
    result.setDate(result.getDate());
    let test = result;
    let dd = test.getDate();
    let mm = test.getMonth() + 1; //January is 0!

    let yyyy = test.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    let lavie = dd + '' + mm + '' + yyyy;;
    return lavie
  }
   addDays = () => {
     let result = new Date(this.reverse());
    result.setDate(result.getDate() + 7);
     let test = result;
     let dd = test.getDate();
     let mm = test.getMonth() + 1; //January is 0!

     let yyyy = test.getFullYear();
     if (dd < 10) {
       dd = '0' + dd;
     }
     if (mm < 10) {
       mm = '0' + mm;
     }
     let lavie = dd + '' + mm + '' + yyyy;;
     return lavie
    }
  
  subDays = () => {
    let result = new Date(this.reverse());
    result.setDate(result.getDate() - 7);
    let test = result;
    let dd = test.getDate();
    let mm = test.getMonth() + 1; //January is 0!

    let yyyy = test.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    let lavie = dd + '' + mm + '' + yyyy;;
    return lavie
  }

  date = () => {
    const today = new Date(),
      date = today.getDate() + '' + (today.getMonth() + 1) + '' + today.getFullYear();
    return date
  }
 
  handleNext = () => { this.props.history.push(`/teachers/2/availabilities/${this.addDays()}`);this.caller()}
  handlePrevious = () => { this.props.history.push(`/teachers/2/availabilities/${this.subDays()}`);this.caller()}

  render() {
    return <div>
      {!(this.date() === this.props.match.params.date)?
      <button onClick={this.handlePrevious}>Previous Week</button>:''}
        <h1>
          Week of{" "}
          {this.props.match.params.date
            .match(/\d{2}(?=\d{4,6})|\d+/g)
            .join("/")}
        </h1>
        <button onClick={this.handleNext}>Next Week</button>

        {this.state.availabilities.map(availability => (
          <Availability
            date={this.props.match.params.date}
            caller={this.caller}
            postLesson={this.postLesson}
            key={availability.id}
            avail={availability}
          />
        ))}
      </div>;
  }
}
