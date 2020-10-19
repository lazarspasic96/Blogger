import classes from './Modal.module.scss'
import React from 'react'


const Modal = (props) => {

    const modal = <div className = {classes.modal}>
        {props.children}
    </div>

    return props.show ? modal : null
}

export default Modal