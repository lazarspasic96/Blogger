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


export const favouritePost = (postId, favourite) => {


    return {
        type: actionTypes.FAVOURITE_POSTS,
        postId: postId,
        favourite: favourite
    }
}


export const fetchMyPosts = (myPosts) => {
    return {
        type: actionTypes.FETCH_MYPOSTS_SUCCESS,
        myPosts
    }
}

export const fetchMyPostsStart = () => {
    return {
        type: actionTypes.FETCH_MYPOSTS_START,
        loading: true
    }
}
export const fetchMyPostsFail = (error) => {
    return {
        type: actionTypes.FETCH_MYPOSTS_FAIL,
        loading: false,
        error
    }
}

export const getMyPost = () => {
    return dispatch => {
        const id = localStorage.getItem('userId')
        if (id) {
            axios.get(`users/${id}/posts`)
                .then(res => {
                    dispatch(fetchMyPostsStart())
                    dispatch(fetchMyPosts(res.data.map(post => new Post(post))))
                })

                .catch(error => {
                    dispatch(fetchMyPostsFail(error))
                 
                })
        }
    }
}


export const editPost = (id, data) => {
    return dispatch => {
        axios.put(`posts/${id}`, data)
            .then(res =>
                console.log(res))
            .catch(err => console.log(err.response))
    }

}

export const deletePost = (id, data) => {
    return dispatch => {
        axios.delete(`posts/${id}`, data)
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
    }

}



export const getSinglePostStart = () => {
    return {
        type: actionTypes.FETCH_SINGLE_POST_START,
        loading: true
    }

}
export const getSinglePostFail = (error) => {
    return {
        type: actionTypes.FETCH_SINGLE_POST_FAIL,
        loading: false,
        error: error
    }

}
export const getSinglePostSuccess = (post) => {
    return {
        type: actionTypes.FETCH_SINGLE_POST_SUCCESS,
        post: post,
        loading: false
    }

}

export const readPost = (id) => {
    return dispatch => {
        dispatch(getSinglePostStart())
        axios(`posts/${id}`)

            .then(res => {
      
                dispatch(getSinglePostSuccess(res.data))
            })

            .catch(err => {
                dispatch(getSinglePostFail(err.response))
            })
    }
}

