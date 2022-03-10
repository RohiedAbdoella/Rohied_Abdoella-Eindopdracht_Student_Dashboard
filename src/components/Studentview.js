import React, { Component } from 'react';
import '../styles/Studentview.css';
import infoStudents from '../data/student_mockdata.js';
import StudentInfo from './StudentInfo.js';


class Studentview extends Component {
  constructor() {
    super()
    this.state = {
      infoStudents: infoStudents
    }
  };

  render() {
    return (
      <div>
        <h1>Recruit our students!</h1>
        <ul className="info-student">
          {this.state.infoStudents.map((student) => (
            <StudentInfo
              key={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              email={student.email}
              age={student.age}
              phone={student.phone}
              photo={student.photo}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default Studentview;
