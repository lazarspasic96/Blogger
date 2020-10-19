
import React from 'react'
import classes from './Card.module.scss'
import cardImg from '../../../assets/images/articleImg.jpg'
import user from '../../../assets/images/user.svg'
import * as action from '../../../store/action/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'




class Card extends React.Component {


    render() {





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
                        <Link to = {`/post/${this.props.postData.id}`}>
                        <span className={classes.readMore}>Read more</span> 
                        </Link>
                    </div>

                    <div className={classes.profileImgBox}>
                        <img src={user} alt='' />
                        <span>Lazar Spasic</span>
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





export default connect(mapStateToProps, null)(Card)