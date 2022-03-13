import React from 'react';

const Table = (props) => {

    const { apiList, apiName, dateTime, status } = props;

    return (
        <table>
            <thead>
            <tr>
                <th>API NAME</th>
                <th> DATETIME</th>
                <th>STATUS</th>
            </tr>
            </thead> 
            <tbody>
            <tr>
                <td>Nombre</td>
                <td>Fecha</td>
                <td>Status</td>
            </tr>
            <tr>
                <td>Nombre</td>
                <td>Fecha</td>
                <td>Status</td>
            </tr>
            </tbody> 
        </table>

    )
};

export default Table;
