import {SelectColumnFilter} from './TableFilter.js';


const Columns = [
    {
      Header: 'Student ',
      accessor: 'student_name',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',  // new 
    },
    {
      Header: 'Assignment ',
      accessor: 'assignment_name',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',  // new 
     },
     {
      Header: 'Difficulty ',
      accessor: 'assignment_level',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',  // new 
     },
     {
      Header: 'Fun ',
      accessor: 'assignment_fun',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',  // new 
     }
];

export default Columns;