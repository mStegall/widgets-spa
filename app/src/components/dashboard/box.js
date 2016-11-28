import React from "react";

const dashboardBox = ({title, comment}) => (
    <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="widget">
            <div className="widget-header">
                <div className="widget-icon green pull-left">
                    <i className="fa fa-users"></i>
                </div>
                <div className="title">{title}</div>
                <div className="comment">{comment}</div>
            </div>
        </div>
    </div>
);

export default dashboardBox;
