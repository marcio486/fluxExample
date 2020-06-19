const initialState= {
    texto : '123'
}

function textoReducer (state = initialState, action){
    switch (action.type){
        case 'setText' :
            return {
            ...state,
            texto:action.payload
        }
        default:
            return state
    }
}

export default textoReducer;