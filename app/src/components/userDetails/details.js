import React from "react";

const Details = ({user}) => (
    <div className="row">
        <div className="col-xs-12">
            <h2>{user.name}</h2>
            <img src={user.gravatar} alt="gravatar"/>
            <p><strong>ID: </strong>{user.id}</p>
        </div>
    </div>
);

export default Details;
