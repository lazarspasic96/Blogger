
import React from 'react'
import classes from './Header.module.css'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'
import {NavLink} from 'react-router-dom'

const Header = (props) => {

    return <> <header className={classes.header}>
        <div className = {classes.infoBox}>
        <p className={classes.homeText}>
            Share something what's <br /> on your mind.
        </p>
        <NavLink to = 'auth'>  <Button className={classes.homePageBtn}>Get started</Button></NavLink>
      
        </div>
        <Button className={classes.articleBtn}>Articles</Button>
        <Button className={classes.authBtn}>Log in</Button>

    </header>
    <div>
        <Card />
    </div>
    </>

}

export default Header