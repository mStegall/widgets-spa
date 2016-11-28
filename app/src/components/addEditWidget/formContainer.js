import React, {Component} from "react";

import Form from "./form";

export default class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                color: "",
                price: "",
                melts: false,
                inventory: ""
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onChangeCheck = this.onChangeCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps({widget}) {
        this.setState({
            data: widget
        });
    }

    onChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState(prevState => ({
            data: Object.assign({}, prevState.data, {
                [name]: value
            })
        }))
    }

    onChangeCheck(event) {
        const name = event.target.name;

        this.setState(prevState => ({
            data: Object.assign({}, prevState.data, {
                [name]: !prevState.data[name]
            })
        }))
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.data);
    } 

    render(){
        return <Form data={this.state.data} onChange={this.onChange} onCheckChange={this.onChangeCheck} onSubmit={this.onSubmit}/>
    }
}
