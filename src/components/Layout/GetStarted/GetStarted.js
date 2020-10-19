import classes from './GetStarted.module.scss'
import React from 'react'
import {Link} from 'react-router-dom'


const GetStarted = (props) => {

    return (
        <>
            <div className={classes.getStartedBox}  id = 'get-started'>
                <h1>Get Started</h1>
                <section className={classes.getStarted}>


                    <div className={classes.register}>
                        <div className={classes.round}>
                            <p>1</p>
                        </div>

                        <h3>Create Account</h3>

                        <p>
                            Create an account for free and start writing today! Show the world what's on your mind
                            and be one of the thousand successful bloggers. So, what are you waiting for?
                   </p>
                        <Link className = {classes.link} to='/authorization'>
                            <span>Click Here to Register!</span>
                        </Link>
                    </div>

                    <div className={classes.create}>
                        <div className={classes.round}>
                            <p>2</p>
                        </div>
                        <h3>Start Writing</h3>

                        <p>
                            Login and start creating something interesting. Write about tech, coding, entrepreneurship, nature... You can even write about your cat :). You can write about anything.
                   </p>

                   <Link className = {classes.link} to='/authorization'>
                            <span>Click Here to Login!</span>
                        </Link>



                    </div>

                    <div className={classes.discover}>
                        <div className={classes.round}>
                            <p>3</p>
                        </div>
                        <h3>Discover</h3>

                        <p>You don't like to write? Nevermind, you don't need an account for reading things from other people. So, what are you waiting for? Start discovering the world of bloggers.</p>
                        <Link className = {classes.link} to='/posts'>
                            <span>Start Discovering!</span>
                        </Link>
                    </div>


                </section>
            </div>


        </>
    )
}


export default GetStarted