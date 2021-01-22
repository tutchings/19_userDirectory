import React from "react";

function Jumbotron() {
    return (
        <div className="card w-100 m-0">
            <div className="card-body bg-dark w-100">
                <h1 className="text-info text-center text-uppercase fw-bold">Employee Directory</h1>
                <h5 className="text-info text-center">Click on carrots to filter by heading or use the search box to narrow your results</h5>
            </div>
        </div>
    )
}

export default Jumbotron;