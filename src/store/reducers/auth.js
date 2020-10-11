import * as actionTypes from '../action/actionTypes'

const initialState = {
    token: null,
    loading: false,
    error: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                loading: false

            }
        case actionTypes.LOGIN_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.SIGNUP_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.SIGNUP_SUCCESS: {
            return {
                ...state,
                loading: false,
                token: action.token
              
            }
            
        }
        case actionTypes.AUTH_LOGOUT: {
         
            return {
                ...state,
                token: null
                
            }
            
        }
        default:
            return state;

    }


}

export default reducer