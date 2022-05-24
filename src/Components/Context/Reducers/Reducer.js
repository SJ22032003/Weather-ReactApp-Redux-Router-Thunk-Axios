const initailState = {
    loading : true,
    data : [],
    error : ""
}

const userData = (state = initailState, action) => {
    switch(action.type){
        case 'FETCH_USERS_REQUEST' :
            return {
                ...state,
                loading : true
            }
        case 'FETCH_USERS_SUCCESS' :
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        case 'FETCH_USERS_FAILURE' :
            return {
                ...state,
                loading : false,
                data:[],
                error : action.payload
            }
        default :
            return state
    }
}

export default userData