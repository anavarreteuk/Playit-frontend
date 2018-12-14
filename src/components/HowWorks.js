import React, { Component } from "react";

import "../App.css";

class HowWorks extends Component {
  render() {
    return <div className="HowItWorks">
        <h1>How It Works</h1>
        <div className="HowItWorksSub">
          <h3>
            From finding the perfect teacher to managing payments,
            scheduling and tracking your progress, we take care of all the
            details, so you can focus on learning.
          </h3>
        </div>
        <div className="mapTeacher">
          <img src="map.png" alt="map" />
        </div>
        <div className="SearchTeacher">
          <h2>Search for a teacher</h2>
          <h3>
            Compare hundreds of teachers based on the criteria that matter
            to you, including background checks, age and experience.
          </h3>
        </div>
        <div className="calendarWrapper">
          <div className="Schedule">
            <h2>Schedule your lessons</h2>
            <h3>
              When you've found the perfect match, schedule your lessons
              online using the teacher's real-time availability.
            </h3>
          </div>
          <div className="howCalendar">
            <img src="calendar.png" alt="calendar" />
          </div>
        </div>
        <div className="teacherHow">
          <img src="teacher.png" alt="teacher" />
        </div>
        <div className="teacherText">
          <h2>Connect with your teacher</h2>
          <h3>
            Your teacher will welcome you with a personalized curriculum to
            meet your specific goals and you'll be able to manage your
            entire schedule through our free online account.
          </h3>
        </div>
      </div>;
  }
}

export default HowWorks;
