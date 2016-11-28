import React, { Component } from "react";

import Details from "../components/widgetDetails/details"

export default class WidgetDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widget: {}
        }
        this.loadWidget(props.params.id);
    }

    loadWidget(id) {
        fetch(`http://spa.tglrw.com:4000/widgets/${id}`)
            .then(response => response.json())
            .then(data => this.setState({
                widget: data
            }))
    }

    render() {
        return (
            <Details widget={this.state.widget} />
        );
    }
}