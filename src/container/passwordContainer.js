import PasswordInput from '../component/input/password';
import * as Actions from '../action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
    password:state["mainReducer"].password
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(PasswordInput)