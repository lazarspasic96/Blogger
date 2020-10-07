import React from 'react'
import classes from './Login.module.scss'
import Input from '../../../components/UI/Input/Input'
import Button from '../../../components//UI/Button/Button'
import {Redirect} from 'react-router-dom'

class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: {

                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email adress'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false,

                },
                password: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'password',
                        placeholder: 'Your password'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false

                }
            },
            isAuth: null
        }

    }
    inputHandler = (event, inputIdentifier) => {
        const updatedAuth = {
            ...this.state.auth,
            [inputIdentifier]: {
                ...this.state.auth[inputIdentifier],
                touched: true,
                value: event.target.value,


            }
        }
        this.setState({ auth: updatedAuth })
    }

    loginHandler = (event) => {
        event.preventDefault()
        this.props.onLogin(this.state.auth.email.value, this.state.auth.password.value)
    }



    render() {
        const updatedAuth = [];
        for (let key in this.state.auth) {
            updatedAuth.push({
                id: key,
                config: this.state.auth[key]
            })

        }

        const form = updatedAuth.map(formElement => {
            return <Input
                key={formElement.id}
                changed={(event) => this.inputHandler(event, formElement.id)}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                touched={formElement.config.touched}
                value={formElement.config.value}
                valueType={formElement.id}

            />
        })

        let redirecting = null

        if(this.props.isAuth) {
            console.log('uso jee')
            return redirecting = <Redirect to = '/dashboard' />
        }
        
        return <div className={classes.logIn}>

  
            <form onSubmit={this.loginHandler}>
       
                <p className = {classes.logInText}>Login</p>
                {form}

                <Button className={classes.logInBtn}>Login</Button>
                <p className={classes.switcher} onClick={this.props.onSwitch}>Don't have an account? Click here to Sign Up!</p>
            </form>
        </div>
    }

}

export default LogIn