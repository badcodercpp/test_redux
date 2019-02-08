import SubmitButton from '../component/input/submit';
import * as Actions from '../action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
    email:state["mainReducer"].email,
    password:state["mainReducer"].password,
    showReduxData:state["mainReducer"].showReduxData
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(SubmitButton)