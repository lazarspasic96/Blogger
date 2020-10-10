import * as actionTypes from '../action/actionTypes'
import Post from '../../models/Post'

const initialState = {
    allPosts: [],
    favouritePosts: [],
    myPosts: [],
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
            
         
    
        default:
            return state
     
    }

}

export default reducer