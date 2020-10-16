import React from 'react'
import MyPostItem from './MyPostItem/MyPostItem'
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'

class MyPosts extends React.Component {
    constructor(props){
        super()
        this.state = {
            
        }
    }

    componentDidMount () {
        this.props.getPosts()
        
    }


    render() {

console.log(this.props.myPosts)
        return <>
            <section>
            {this.props.myPosts ? this.props.myPosts.map(post => <MyPostItem postData = {post} />): <p>Currently you don't have any posts!</p>}
            </section>

        </>
    }

}

const mapStateToProps = state => {
    return {
        myPosts: state.post.myPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(action.getMyPost())
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(MyPosts)