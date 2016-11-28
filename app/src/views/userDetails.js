import React, { Component } from "react";

import Details from "../components/userDetails/details"

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        this.loadUser(props.params.id);
    }

    loadUser(id) {
        fetch(`http://spa.tglrw.com:4000/users/${id}`)
            .then(response => response.json())
            .then(data => this.setState({
                user: data
            }))
    }

    render() {
        return (
            <Details user={this.state.user} />
        );
    }
}