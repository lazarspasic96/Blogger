
import React from 'react'
import classes from './Header.module.css'
import Button from '../../UI/Button/Button'
import { NavLink } from 'react-router-dom'
import NavBar from '../../UI/Nav/Nav'

const Header = (props) => {

    return <> <header className={classes.header}>
        <div className={classes.infoBox}>
            <p className={classes.homeText}>
                Share something what's <br /> on your mind.
        </p>
            <NavLink to='#get-started'>  <Button className={classes.homePageBtn}>Get started</Button></NavLink>

        </div>
        <NavBar />

    </header>

    </>

}

export default Header