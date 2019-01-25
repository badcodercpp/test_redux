export const demoReducer = (state = [] ,action) => {
    switch (action.type) {
        case 'DEMO_ACTION':
        console.log({
            ...state,
              xyz:action.xyz
          })
          return {
            ...state,
              xyz:action.xyz
          }
        default:
          return state
    }
}