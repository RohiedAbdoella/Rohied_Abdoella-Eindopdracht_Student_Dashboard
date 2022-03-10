import React, { Component } from 'react';
import Graph from './Graph.js';
import students from '../data/student_mockdata.js';
import assignments from '../data/assignment_data.js';
import { Link } from 'react-router-dom';
import '../styles/Graphviews.css';


class Graphviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: students,
      assignmentData: assignments,
      showAllData: true,
    };
  }

  render() {
    const groupAssignment = this.state.assignmentData.reduce(function (m, d) {
      if (!m[d.assignment_name]) {
        m[d.assignment_name] = { ...d, count: 1 };
        return m;
      }
      m[d.assignment_name].assignment_level += d.assignment_level;
      m[d.assignment_name].assignment_fun += d.assignment_fun;
      m[d.assignment_name].count += 1;
      return m;
    }, {});

    const averagePerAssignment = Object.keys(groupAssignment).map(function (avg) {
      const item = groupAssignment[avg];
      return {
        name: item.assignment_name,
        level: item.assignment_level / item.count,
        fun: item.assignment_fun / item.count,
      };
    });
    const assignmentsGrouped = averagePerAssignment.map((item) => item.name);

    const studentLinks = this.state.studentData.map((item) => {
      const studentUrl = '/Student/' + item.firstName;

      return (
        <li key={item.firstName}>
          <Link to={studentUrl} > {item.firstName} </Link>
        </li>
      );
    });

    return (
      <div>

        <ul className="navbar2">{studentLinks} </ul>

        {this.state.showAllData ? (
          <div>
            <Graph averageData={averagePerAssignment}
              assignmentNames={assignmentsGrouped}
            />
          </div>
        ) : null}

      </div>
    );
  }
};

export default Graphviews;
