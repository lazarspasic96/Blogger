
import React from 'react'
import classes from './Header.module.css'
import Button from '../../UI/Button/Button'
import { Link } from 'react-scroll'
import NavBar from '../../UI/Nav/Nav'
import GetStarted from '../GetStarted/GetStarted'

const Header = (props) => {

    return <> <header className={classes.header}>
        <div className={classes.infoBox}>
            <p className={classes.homeText}>
                Share something what's <br /> on your mind.
        </p>
            <Link to = 'get-started' spy={true} smooth={true} duration={1000}>  <Button className={classes.homePageBtn}>Get started</Button></Link>

        </div>
        <NavBar/>

    </header>

    <GetStarted />



    </>

}

export default Header