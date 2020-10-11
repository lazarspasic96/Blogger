
import React from 'react'
import classes from './Card.module.scss'
import cardImg from '../../../assets/images/articleImg.jpg'
import like from '../../../assets/images/like.svg'
import user from '../../../assets/images/user.svg'
import * as action from '../../../store/action/index'
import { connect } from 'react-redux'




class Card extends React.Component {
    constructor(props) {
        super()
        this.state = {
            favCassName: ''
        }
    }





    render() {


    let favCassName = null
        const favouritePosts = JSON.parse(localStorage.getItem("savedFavPosts"))
        if(favouritePosts) {
              favouritePosts.forEach(post => {
            if(post.id === this.props.postData.id) {
                favCassName = classes.favourite
            }
        });
        }
      
 


        let photo = cardImg
        if (this.props.postData.photo && this.props.postData.photo.includes('http')) {
            photo = this.props.postData.photo
        }

        return (
            <article className={classes.card}>
                <div className={classes.imgBox}>
                    <img src={photo} alt='' />
                </div>

                <div className={classes.infoBox}>
                    <div className={classes.textBox}>
                        <h1>{this.props.postData.title}</h1>
                        <p> {
                            this.props.postData.subTitle}
                        </p>
                        <span className={classes.readMore}>Read more</span>
                    </div>

                    <div className={classes.profileImgBox}>
                        <img src={user} alt='' />
                        <span>Lazar Spasic</span>
                    </div>


                    <div className={classes.likeBox} onClick={() => this.props.onFavourite(this.props.postData.id, this.props.postData.fav)}>
                        <img className={''} src={like} />
                    </div>

                </div>


            </article>


        )

    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFavourite: (postId, favourite) => (dispatch(action.favouritePost(postId, favourite))),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Card)