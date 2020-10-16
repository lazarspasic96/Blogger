import classes from './MyPostItem.module.scss'
import React from 'react'
import edit from '../../../../assets/images/edit.svg'
import { Link } from 'react-router-dom'

class MyPostItem extends React.Component {

    render() {
        console.log(this.props.postData)
        return (
            <>

                <article className={classes.postItem}>
                    <div className={classes.title}>
                        <p>{this.props.postData.title}</p>
                    </div>
                    <Link to={`/edit-post/${this.props.postData.id}`}>
                        <div className={classes.editPost}>
                            <img src={edit} />
                        </div>
                    </Link>
                </article>

            </>
        )
    }
}

export default MyPostItem