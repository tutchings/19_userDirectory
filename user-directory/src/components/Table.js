import React from 'react';

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.filteredResults.map(result => (
                    <tr>
                        <th scope="row"><img alt="user_img" src={result.picture.thumbnail} /></th>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.slice(0,10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;