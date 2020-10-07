
import React from 'react'
import classes from './Card.module.scss'
import cardImg from '../../../assets/images/articleImg.jpg'
import like from '../../../assets/images/like.svg'
import unlike from '../../../assets/images/unlike.svg'
import user from '../../../assets/images/user.svg'



const card = (props) => {
    return (<>
        <article className={classes.card}>
            <div className={classes.imgBox}>
                <img src={cardImg} alt='' />
            </div>

            <div className={classes.infoBox}>
                <div className={classes.textBox}>
                    <h1>Lorem ipsum title</h1>
                    <p>Our team was inspired by the seven skills of highly effective programmers created by the TechLead.
                    We wanted to provide our own take on the topic...
                    </p>
                    <span className={classes.readMore}>Read more Link</span>
                </div>

                <div className={classes.profileImgBox}>
                    <img src={user} alt='' />
                    <span>Lazar Spasic</span>
                </div>

        
                <div className={classes.likeBox}>
                    <img className={classes.unlike} src={unlike} />
                    <img className={classes.like} src={like} />
                </div>

            </div>

          
        </article>


    </>)
}

export default card