import React from "react";
import avatar from "./avatar.jpg";

const Header = () => (
    <div className="row header col-xs-12">
        <div className="user pull-right">
            <div className="item dropdown">
                <a href="#" className="dropdown-toggle"><img src={avatar} alt="" /></a>
            </div>
        </div>
        <div className="meta">
            <div className="page">Dashboard</div>
            <div className="breadcrumb-links">Home / Dashboard</div>
        </div>
    </div>
)

export default Header;