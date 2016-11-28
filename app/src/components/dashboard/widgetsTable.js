import React from "react";

import { Link } from "react-router";

const DashboardWidgetsTable = ({widgets, filterValue, onFilterChange}) => (
    <div className="col-lg-6">
        <div className="widget">
            <div className="widget-header">Widgets
                <div className="pull-right">
                    <input type="text" className="form-control input-sm" value={filterValue} onChange={onFilterChange}/>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {widgets.map(widget => (
                            <tr key={widget.id}>
                                <td className="text-center">{widget.id}</td>
                                <td><Link to={`/widget/details/${widget.id}`}>{widget.name}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default DashboardWidgetsTable;