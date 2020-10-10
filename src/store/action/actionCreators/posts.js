import * as actionTypes from '../actionTypes'
import axios from '../../../services/axios'
import Post from '../../../models/Post'

const fetchPostSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts,
        loading: false
    }
}
const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START,
        loading: true
    }
}
const fetchPostsFail = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_START,
        error: error,
        loading: false
    }
}

export const onFetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsStart())
        axios.get('posts')
            .then(res => {
                const results = res.data.map(post => new Post(post))
                dispatch(fetchPostSuccess(results))
            })
            .catch(err => {
                dispatch(fetchPostsFail(err))
            })

    }
}


export const newPostSucces = () => {
    return {
        type: actionTypes.NEW_POST_SUCCESS,
        loading: false,
    }
}
export const newPostFail = (error) => {
    return {
        type: actionTypes.NEW_POST_FAIL,
        loading: false,
        error: error
    }
}

export const newPostStart = () => {
    return {
        type: actionTypes.NEW_POST_START,
        loading: true
    }
}

export const newPost = (postData) => {
    return dispatch => {
        dispatch(newPostStart())

        axios.post('posts', postData)
        
        .then(res => {
            console.log(res.data)
            dispatch(newPostSucces())
        
        })
        .catch(error => {
            dispatch(newPostFail(error))
        })
    }
}
