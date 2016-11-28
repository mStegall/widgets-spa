import React from "react";

import { Link } from "react-router"

const Table = ({widgets, filterValue, onFilterChange}) => (
    <div className="row">
        <div className="col-lg-12">
            <div className="widget">
                <div className="widget-header">Widgets
                    <div className="pull-right">
                        <Link to="/widget/add" className="btn btn-sm btn-info">+ Create</Link>
                    </div>
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
                                <th>Color</th>
                                <th>Price</th>
                                <th>Melts?</th>
                                <th>Inventory</th>
                            </tr>
                        </thead>
                        <tbody>
                            {widgets.map(widget => (
                                <tr key={widget.id}>
                                    <td className="text-center">{widget.id}</td>
                                    <td><Link to={`/widget/details/${widget.id}`}>{widget.name}</Link></td>
                                    <td>{widget.color}</td>
                                    <td>${widget.price}</td>
                                    <td>{widget.melts ? "Yes" : "No"}</td>
                                    <td>{widget.inventory}</td>
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
