
import React from 'react'
import classes from './Header.module.css'
import Button from '../../UI/Button/Button'

const Header = (props) => {

    return <header className={classes.header}>
        <div className = {classes.infoBox}>
        <p className={classes.homeText}>
            Share something what's <br /> on your mind.
        </p>
        <Button className={classes.homePageBtn}>Let's write something</Button>
        </div>
        <Button className={classes.articleBtn}>Articles</Button>
        <Button className={classes.authBtn}>Log in</Button>

    </header>

}

export default Header