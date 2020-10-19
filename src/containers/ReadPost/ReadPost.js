import classes from './ReadPost.module.scss'
import React from 'react'
import { connect } from 'react-redux'
import * as action from '../../store/action/index'


class ReadPost extends React.Component {




    componentDidMount() {
        let id = this.props.match.params.id
        this.props.onReadPost(id)

    }

    render() {

        return <>
            <article className={classes.readPost}>

                <h1>{this.props.postData.title}</h1>
                <h3>{this.props.postData.subtitle}</h3>
                <p>{this.props.postData.text}</p>

            </article>


        </>
    }
}

const mapStateToProps = state => {
    return {
        postData: state.post.singlePost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReadPost: (id) => dispatch(action.readPost(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReadPost)