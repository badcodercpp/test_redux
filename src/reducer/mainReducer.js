export const mainReducer = (state = [] ,action) => {
    switch (action.type) {
        case 'INPUT_CHANGE_ACTION':
        console.log({
            ...state,
              payload:action.payload
          })
          return {
            ...state,
              payload:action.payload
          }
        default:
          return state
    }
}