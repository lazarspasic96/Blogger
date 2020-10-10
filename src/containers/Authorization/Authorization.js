import classes from './Authorization.module.scss'
import React from 'react'
import authorizationImg from '../../assets/images/authorization.svg'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'
import NavBar from '../../components/UI/Nav/Nav'


class Authorization extends React.Component {
    constructor(props) {
        super()
        this.state = {
            switchlog: false
        }
    }

    switchLogger = () => {
        this.setState(prevState => {
            return {
                switchLog: !prevState.switchLog
            }
        })
    }



    render() {
        let auth = null
        if (this.state.switchLog) {
            auth = <SignUp onSwitch={this.switchLogger} />
        }

        else {
            auth = <LogIn onSwitch={this.switchLogger} />
        }
        return (
            <>
                <NavBar />
                <section className={classes.authorization}>
                    <div className={classes.imageBox}>
                        <img className={classes.authImg} src={authorizationImg} alt='' />
                    </div>

                    <div className={classes.authForm}>
                        {auth}
                    </div>
                </section>
            </>
        )



    }

}

export default Authorization;