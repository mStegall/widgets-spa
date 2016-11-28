import React, { Component } from "react";
import Table from "./widgetsTable";

export default class TableContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterValue: "",
        }

        this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(event) {
        const filterValue = event.target.value;

        this.setState({
            filterValue
        })
    }

    render() {
        const filteredWidgets = this.props.widgets.filter(widget => widget.name.toLowerCase().includes(this.state.filterValue));

        return <Table widgets={filteredWidgets} filterValue={this.state.filterValue} onFilterChange={this.onFilterChange} />;
    }
}