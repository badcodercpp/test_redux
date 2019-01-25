import React, { Component } from 'react';

export default class CP extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        //this._change_input=this._change_input.bind(this)
    }
    render(){
        return (
            <p>{this.props.value}</p>
        )
    }
}