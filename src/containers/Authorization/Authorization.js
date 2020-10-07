import classes from './Authorization.module.scss'
import React from 'react'
import authorizationImg from '../../assets/images/authorization.svg'
import LogIn from './LogIn/LogIn'


class Authorization extends React.Component {
    constructor(props) {
        super()
        this.state = {
            test: props.testtg
        }
    }

    render() {
        return (
            <>

                <section className={classes.authorization}>
                    <div className={classes.imageBox}>
                        <img className={classes.authImg} src={authorizationImg} alt='' />
                    </div>

                    <div className={classes.authForm}>
                        <LogIn />
                    </div>
                </section>
            </>
        )



    }

}

export default Authorization;