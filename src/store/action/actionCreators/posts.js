import * as actionTypes from '../actionTypes'
import axios from '../../../services/axios'

export const fetchPostSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        posts: posts
    }
}

export const onFetchPost = () => {
    return dispatch => {
        axios.get('posts')
         .then(res => {
             console.log(res.data)
            dispatch(fetchPostSuccess(res.data))
         })
 
    }
}