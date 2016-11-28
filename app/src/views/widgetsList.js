import React, { Component } from "react";

import Table from "../components/widgetsList/tableContainer";

export default class WidgetsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets: []
        }
        this.loadWidgets();
    }

    loadWidgets() {
        fetch("http://spa.tglrw.com:4000/widgets")
            .then(response => response.json())
            .then(data => this.setState({
                widgets: data
            }))
    }

    render() {
        return (
            <Table widgets={this.state.widgets} />
        );
    }
}