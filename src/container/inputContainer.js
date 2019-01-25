import CustomInput from '../component/input/customInput';
import * as Actions from '../action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    console.log(state)
    return {
    payload:state["mainReducer"].payload
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(CustomInput)