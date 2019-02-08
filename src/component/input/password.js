import React, { Component } from 'react';

export default class PasswordInput extends Component {
    constructor(props){
        super(props);
    }
    _change_input=(evt)=>{
        const {actions} =this.props;
        actions.PASSWORD_CHANGE_DISPATCH(evt.target!==undefined?evt.target.value:evt.currentTarget.value)
    }
    render(){
        return (
            <React.Fragment>
                <input type="password" value={this.props.password?this.props.password:""} onChange={this._change_input}  />
            </React.Fragment>
        )
    }
}