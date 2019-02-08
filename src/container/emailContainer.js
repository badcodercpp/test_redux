import EmailInput from '../component/input/email';
import * as Actions from '../action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
    email:state["mainReducer"].email
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(EmailInput)