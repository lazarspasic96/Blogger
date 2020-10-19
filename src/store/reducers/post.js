import * as actionTypes from '../action/actionTypes'
import Post from '../../models/Post'

const initialState = {
    allPosts: [],
    updatedPosts: [],
    favouritePosts: [],
    myPosts: [],
    singlePost: {},
    loading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START:
            return {
                ...state,
                loading: action.loading
            }



        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                allPosts: action.posts,
                loading: action.loading,

            }
        case actionTypes.FETCH_POSTS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: action.loading,

            }

        case actionTypes.FETCH_POSTS_START:
            return {
                ...state,
                loading: action.loading
            }
        case actionTypes.FETCH_MYPOSTS_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                myPosts: action.myPosts
            }
        case actionTypes.FETCH_MYPOSTS_FAIL:
            return {
                ...state,
                loading: action.loading,
                error: action.error
            }

        case actionTypes.FETCH_SINGLE_POST_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                singlePost: action.post,
            }

        case actionTypes.FETCH_SINGLE_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }

  

  



        default:
            return state

    }

}

export default reducer