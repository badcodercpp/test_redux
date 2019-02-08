import { INPUT_CHANGE_ACTION,
     DEMO_ACTION, 
     EMAIL_CHANGE,
     PASSWORD_CHANGE, 
     SHOW_REDUX_DATA } from './actionType';

export const INPUT_CHANGE_ACTION_DISPATCH = payload => {
    return {
        type:INPUT_CHANGE_ACTION,
        payload
    }
}
export const DEMO_ACTION_DISPATCH = xyz => {
    return {
        type:DEMO_ACTION,
        xyz
    }
}

export const EMAIL_CHANGE_DISPATCH = email => {
    return {
        type:EMAIL_CHANGE,
        email
    }
}

export const PASSWORD_CHANGE_DISPATCH = password => {
    return {
        type: PASSWORD_CHANGE,
        password
    }
}

export const SHOW_REDUX_DATA_DISPATCH = (showReduxData,email,password)=>{
    return {
        type: SHOW_REDUX_DATA,
        showReduxData,
        email,
        password
    }
}