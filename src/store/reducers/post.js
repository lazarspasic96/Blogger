import * as actionTypes from '../action/actionTypes'
import Post from '../../models/Post'

const initialState = {
    allPosts: [],
    favouritePosts: [],
    myPosts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POST_SUCCESS:
            return {
                ...state,   
                myPosts: null 

            }
            
            break;
    
        default:
            return state
     
    }

}

export default reducer