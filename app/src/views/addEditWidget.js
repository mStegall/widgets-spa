import React, { Component } from "react";

import Form from "../components/addEditWidget/formContainer";

export default class AddEditWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widget: {}
        }
        if (props.params.id) {
            this.loadWidget(props.params.id);
        }
    }

    loadWidget(id) {
        fetch(`http://spa.tglrw.com:4000/widgets/${id}`)
            .then(response => response.json())
            .then(data => this.setState({
                widget: data
            }))
    }

    updateWidget(data) {
        const myInit = {
            method: "PUT",
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        fetch(`http://spa.tglrw.com:4000/widgets/${data.id}`, myInit)
            .then(() => {
                window.history.back();
            })
    }

    addWidget(_data) {
        const data = Object.assign({}, _data, {
            melts: _data.melts ? "true": "false"
        })
        const myInit = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors'
        }

        fetch("http://spa.tglrw.com:4000/widgets", myInit)
            .then(() => {
                window.history.back();
            })
    }

    render() {
        const onSubmit = this.props.params.id ? this.updateWidget : this.addWidget;
        return <Form widget={this.state.widget} onSubmit={onSubmit} />;
    }
}