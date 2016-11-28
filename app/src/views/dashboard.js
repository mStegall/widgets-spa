import React, { Component } from "react";

import Boxes from "../components/dashboard/boxes"
import Box from "../components/dashboard/box";
import Tables from "../components/dashboard/tables";
import UsersTable from "../components/dashboard/usersTableContainer";
import WidgetsTable from "../components/dashboard/widgetsTableContainer";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      widgets: []
    }
    this.loadUsers();
    this.loadWidgets();
  }

  loadUsers() {
    fetch("http://spa.tglrw.com:4000/users")
      .then(response => response.json())
      .then(data => this.setState({
        users: data
      }))
  }

  loadWidgets() {
    fetch("http://spa.tglrw.com:4000/widgets")
      .then(response => response.json())
      .then(data => this.setState({
        widgets: data
      }))
  }

  render() {
    const { users, widgets } = this.state;

    return (
      <div>
        <Boxes>
          <Box title={users.length} comment="Users" />
          <Box title={widgets.length} comment="Widgets" />
        </Boxes>
        <Tables>
          <UsersTable users={users} />
          <WidgetsTable widgets={widgets} />
        </Tables>
      </div>
    );
  }
}