import React from "react";

import { Link } from "react-router"

const Table = ({users, filterValue, onFilterChange}) => (
    <div className="row">
        <div className="col-lg-12">
            <div className="widget">
                <div className="widget-header">
                    Users
                    <div className="pull-right">
                        <input type="text" className="form-control input-sm" value={filterValue} onChange={onFilterChange} />
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th>Name</th>
                                <th>Avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className="text-center">{user.id}</td>
                                    <td><Link to={`/user/${user.id}`}>{user.name}</Link></td>
                                    <td><img src={user.gravatar} alt="" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
);

export default Table;
