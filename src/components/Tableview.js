import React from 'react';
import Table from './Table.js';
import columns from './TableColumns';
import data from '../data/tableview_data.js';


function Tableview() {
    return (
        <div>
            <h1>Tableview</h1>
            <Table columns={columns} data={data} />
        </div>
    )
};

export default Tableview;