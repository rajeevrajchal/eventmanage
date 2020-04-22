import * as actionTypes from '../types'

const initialState = {
    authUser: null,
    profileDescription:null,
    uid: null,
    isLoggedIn: false,
    error: null
}

export default (state = initialState, action) => {
    let user = action.user;
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                authUser: user,
                uid: user.uid,
                isLoggedIn: true,
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error:action.error
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                isLoggedIn:false
            }
        case actionTypes.PROFILE_DETAIL:
            return {
                ...state,
                profileDescription:action.description
            }
            
        default:
            return state;
    }
}