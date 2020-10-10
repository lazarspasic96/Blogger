
import * as actionTypes from '../actionTypes'
import axios from '../../../services/axios'
import React from 'react'
import {Redirect} from 'react-router-dom'

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
                console.log(res)
                localStorage.setItem('token', res.data.accessToken)
                dispatch(userList(loginData))
                dispatch(loginSucces(res.data.accessToken))
            })
            .catch(error => {
                console.log('eeee', error.response.data.message)
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
        console.log(signUpData)
        dispatch(signUpStart())
        axios.post('auth/register', signUpData)
            .then(res => {
                localStorage.setItem('token', res.data.accessToken)
                dispatch(signUpSuccess(res.data.accessToken))
           


            })
            .catch(error => {
                dispatch(signUpFail(error.response.data.message))
            })
    }
}

export const userList = (userData) => {
    return dispatch => {
        axios.get('users')
            .then(res => {
                let userId = res.data.filter(user => userData.email === user.email)[0]
                console.log(userId)
                if (userId) {
                    localStorage.setItem('userId', userId.id)
                }
            })
    }
}