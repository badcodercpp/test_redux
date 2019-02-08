export const mainReducer = (state = [] ,action) => {
    switch (action.type) {
        case 'INPUT_CHANGE_ACTION':
          return {
            ...state,
              payload:action.payload
          }
        case 'EMAIL_CHANGE':
          return {
              ...state,
              email:action.email
            }
        case 'PASSWORD_CHANGE':
            return {
                ...state,
                password:action.password
            }
        case 'SHOW_REDUX_DATA':
            return {
                ...state,
                showReduxData:action.showReduxData,
                email:action.email,
                password:action.password
            }
        default:
          return state
    }
}