import React, { Component } from 'react';

export default class SubmitButton extends Component {
    constructor(props){
        super(props);
    }
    _change_input=(evt)=>{
        const {actions} =this.props;
        actions.SHOW_REDUX_DATA_DISPATCH(true,this.props.email,this.props.password)
    }
    render(){
        return (
            <React.Fragment>
                <button onClick={this._change_input} >click to see redux data</button>
                {
                    (this.props.showReduxData)?(
                        <div>
                            <p>
                                {
                                    this.props.email
                                }
                            </p>
                            <p>
                                {
                                    this.props.password
                                }
                            </p>
                        </div>
                    ):false
                }
            </React.Fragment>
        )
    }
}