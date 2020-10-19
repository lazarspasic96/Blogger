import classes from './ReadPost.module.scss'
import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../store/action/index'


class ReadPost extends React.Component {




    componentDidMount() {
        let id = this.props.match.params.id
        this.props.onReadPost(id)

    }

    render() {

        return <>
    <article className = {classes.readPost}>

    </article>


        </>
    }
}

const mapStateToProps = state => {
    return {
        state: state.post.singlePost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReadPost: (id) => dispatch(action.readPost(id))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadPost)