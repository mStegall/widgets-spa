import React from "react";

import { Link } from "react-router"

const Details = ({widget}) => (
    <div className="row">
        <div className="col-xs-12">
            <h2>{widget.name}</h2>
            <Link to={`/widget/update/${widget.id}`} className="btn btn-sm btn-info">Edit</Link>
            <p><strong>ID: </strong>{widget.id}</p>
            <p><strong>Color: </strong>{widget.color}</p>
            <p><strong>Price: </strong>${widget.price}</p>
            <p><strong>Inventory: </strong>{widget.inventory}</p>
            <p><strong>Melts: </strong>{widget.melts ? "Yes" : "No"}</p>
        </div>
    </div>
);

export default Details;
