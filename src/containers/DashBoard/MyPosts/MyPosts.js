import React from 'react'
import MyPostItem from './MyPostItem/MyPostItem'
import { connect } from 'react-redux'
import * as action from '../../../store/action/index'
import classes from './MyPosts.module.scss'
import { Link } from 'react-router-dom'

class MyPosts extends React.Component {
    constructor(props) {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getPosts()

    }


    render() {

        const noPosts = <div className={classes.noPosts}>
            <p className={classes.myPostInfo}>Currently you don't have any posts!</p>
            <Link style = {{textDecoration: 'none'}} to='/new-post'>


                <span>Click here ant start writing!</span>
            </Link>
        </div>
        return <>
            <section>
                {this.props.myPosts.length > 0 ? this.props.myPosts.map(post => <MyPostItem postData={post} />) :
                    noPosts
                }
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


export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)