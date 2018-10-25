import React from 'react';

export default function Preview ({data, onDelete, onEdit}) {
    return(
        <div>
            <h3>TODO List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Message</th>
                        <th colSpan='2'>Todo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, ind) => {
                            return(
                                <tr key={ind}>
                                    <td>{value}</td>
                                    <td>
                                        <input
                                            type='button' value='Edit' className='btn btn-secondary'
                                            onClick={() => onEdit(ind)} />
                                    </td>
                                    <td>
                                        <input
                                            type='button' value='Delete' className='btn btn-danger'
                                            onClick={() => onDelete(ind)} />
                                    </td>
                                </tr>
                            )
                    }
                )}
                </tbody>
            </table>
        </div>
    );
}