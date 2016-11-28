import React, { Component } from "react";

import Table from "../components/usersList/tableContainer"

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.loadUsers();
    }

    loadUsers() {
        fetch("http://spa.tglrw.com:4000/users")
            .then(response => response.json())
            .then(data => this.setState({
                users: data
            }))
    }

    render() {
        return (
            <Table users={this.state.users} />
        );
    }
}