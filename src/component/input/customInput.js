import React, { Component } from 'react';

export default class CustomInput extends Component {
    constructor(props){
        super(props);
        
        //this._change_input=this._change_input.bind(this)
    }
    componentDidMount(){
        
    }
    _change_input=(evt)=>{
        //this.setState({inputVal:evt.target!==undefined?evt.target.value:evt.currentTarget.value})
        //this.props.m({common:evt.target!==undefined?evt.target.value:evt.currentTarget.value})

        let {actions} =this.props;
        actions.INPUT_CHANGE_ACTION_DISPATCH(evt.target!==undefined?evt.target.value:evt.currentTarget.value)
        actions.DEMO_ACTION_DISPATCH("hello ")
        // comment
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.payload?this.props.payload:""} onChange={this._change_input}  />
                <p>{this.props.payload}</p>
            </div>
        )
    }
}