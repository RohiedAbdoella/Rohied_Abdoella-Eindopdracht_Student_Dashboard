import React, { useState } from 'react';
import Graph from './Graph';
import { useParams } from 'react-router-dom';


function GraphDetails(props) {
  const params = useParams();
  const filteredAssignments = props.data
    .filter((item) => params.name === item.student_name)
    .map(function (object) {
      return {
        name: object.assignment_name,
        level: object.assignment_level,
        fun: object.assignment_fun,
      };
    });

  const [content, showContent] = useState(true);

  return (
    <div>
      {content ? (
        <div>
          <p> {params.name} </p>
          <Graph averageData={filteredAssignments} />
        </div>
      ) : null}
    </div>
  );
}

export default GraphDetails;
