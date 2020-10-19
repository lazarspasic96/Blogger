
import * as actionTypes from '../actionTypes'
import axios from '../../../services/axios'


export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    }
}
export const loginSucces = (token) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
    }
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        error: error
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginStart())

        const loginData = {
            email: email,
            password: password
        }

        axios.post('auth/login', loginData)
            .then(res => {
      
                const expirationDate = new Date (new Date().getTime() + 3600 * 1000 )
                localStorage.setItem('token', res.data.accessToken)
                localStorage.setItem('expirationDate', expirationDate )
                dispatch(userList(loginData))
                dispatch(checkAuthTimeout())
                dispatch(loginSucces(res.data.accessToken))
            })
            .catch(error => {
 
                dispatch(loginFail(error.response.data.message))
            })
    }
}

export const signUpStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const signUpFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error

    }
}

export const signUpSuccess = (token) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        token: token,

    }
}

export const signUp = (signUpData) => {
    return dispatch => {

        dispatch(signUpStart())
        axios.post('auth/register', signUpData)
            .then(res => {
                const expirationDate = new Date (new Date().getTime() + 3600 * 1000 )
                localStorage.setItem('expirationDate', expirationDate )
                localStorage.setItem('token', res.data.accessToken)
                dispatch(checkAuthTimeout())
                dispatch(userList(signUpData))
                dispatch(signUpSuccess(res.data.accessToken))
           


            })
            .catch(error => {
                dispatch(signUpFail(error.response.data.message))
            })
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, 3600 * 1000); //Logout user after 60 minutes.
    }

}

export const checkAuth = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if(!token) {
            dispatch(logout())
        }

        else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))

            if(expirationDate > new Date()) {
                dispatch(loginSucces(token))
            }

            else {
                dispatch(logout())
            }
        }
    }
}





export const userList = (userData) => {
    return dispatch => {
        axios.get('users')
            .then(res => {
                let userId = res.data.filter(user => userData.email === user.email)[0]
           
                if (userId) {
                    localStorage.setItem('userId', userId.id)
                }
            })
    }
}