import React, { Component } from 'react';

export default class EmailInput extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    _change_input=(evt)=>{
        const {actions} =this.props;
        actions.EMAIL_CHANGE_DISPATCH(evt.target!==undefined?evt.target.value:evt.currentTarget.value)
    }
    render(){
        return (
            <React.Fragment>
                <input type="text" value={this.props.email?this.props.email:""} onChange={this._change_input}  />
            </React.Fragment>
        )
    }
}