import * as actionTypes from '../action/actionTypes'
import Post from '../../models/Post'

const initialState = {
    allPosts: [],
    updatedPosts: [],
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

        case actionTypes.FAVOURITE_POSTS:
            const updatedPosts = state.allPosts.map(post => {
                if (parseInt(action.postId) === parseInt(post.id)) {
                    return {
                        ...post,
                        fav: !action.favourite
                    }
                }
                return post;
            })
            const favouritePosts = updatedPosts.filter(post => post.fav)
            localStorage.setItem('savedFavPosts', JSON.stringify(favouritePosts))
            return {
                ...state,
                allPosts: updatedPosts
            }



        default:
            return state

    }

}

export default reducer