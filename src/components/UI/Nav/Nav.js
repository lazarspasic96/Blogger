import React from 'react'
import classes from './NavBar.module.scss'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const NavBar = (props) => {

    return (
        <>
            <nav>
                <NavLink to='articles'>
                    <Button className={classes.articleBtn}>Articles</Button>
                </NavLink>
                <NavLink to='#auth'>
                    <Button className={classes.authBtn}>Log in</Button>
                </NavLink>
            </nav>
        </>
    )
}

export default NavBar