
import React from 'react'
import classes from './Button.module.css'


const Button = (props) => {

    const classNames = [classes.Button,  props.className]

    if(props.disabled) {
        classNames.push(classes.disabled)
    }

    return <button disabled = {props.disabled} className = {classNames.join(' ')} onClick = {props.clicked}>{props.children}</button>
}

export default Button