import classes from './Posts.module.scss';
import React from 'react'
import Card from '../../components/UI/Card/Card'
import NavBar from '../../components/UI/Nav/Nav';
import * as action from '../../store/action/index'
import { connect } from 'react-redux'

class Posts extends React.Component {
    constructor(props) {
        super()
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        this.props.fetchPosts()

 
        


    }



    render() {
 


        return (
            <>

                <section >
                    <header>
                        <h1 className={classes.title}>Trending Posts</h1>
                        <NavBar />
                    </header>

                    <main className={classes.articleContainer}>
           {this.props.fetchedPosts.map(post => <Card key = {post.id} postData = {post}/>)}
                    </main>

                </section>

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchedPosts: state.post.allPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(action.onFetchPosts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts);