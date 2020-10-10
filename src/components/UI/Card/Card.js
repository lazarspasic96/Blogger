
import React from 'react'
import classes from './Card.module.scss'
import cardImg from '../../../assets/images/articleImg.jpg'
import like from '../../../assets/images/like.svg'
import unlike from '../../../assets/images/unlike.svg'
import user from '../../../assets/images/user.svg'



const card = (props) => {
    let photo = cardImg
    if (props.postData.photo && props.postData.photo.includes( 'http')) {
        photo = props.postData.photo


    }
    console.log(photo)
    return (<>
        <article className={classes.card}>
            <div className={classes.imgBox}>
                <img src={photo} alt='' />
            </div>

            <div className={classes.infoBox}>
                <div className={classes.textBox}>
                    <h1>{props.postData.title}</h1>
                    <p> {
                        props.postData.text}
                    </p>
                    <span className={classes.readMore}>Read more</span>
                </div>

                <div className={classes.profileImgBox}>
                    <img src={user} alt='' />
                    <span>Lazar Spasic</span>
                </div>


                <div className={classes.likeBox}>
                    {/*         <img className={classes.unlike} src={unlike} /> */}
                    <img className={classes.like} src={like} />
                </div>

            </div>


        </article>


    </>)
}

export default card