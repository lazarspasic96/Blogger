import React from 'react'
import classes from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'

class NavBar extends React.Component {
    state = {
        toogleClass: false
    }


    render() {
        return (
            <>
                <div className={classes.navBar}>
                    <Button className={classes.navBtn}>Toggle</Button>

                    <div className={classes.btnBox}>

                    </div>

                    <nav className={classes.navigation}>
                        <ul className={classes.navigationList}>
                            <li className={classes.item}> <Link className={classes.navLink} to='/'>Log in </Link></li>
                            <li className={classes.item}> <Link className={classes.navLink} to='/'>Articles </Link></li>
                            <li className={classes.item}> <Link className={classes.navLink} to='/'>Our Story </Link></li>
                            <li className={classes.item}> <Link className={classes.navLink} to='/'> Get Stared </Link></li>

                        </ul>
                    </nav>




                </div>

            </>
        )
    }
}

export default NavBar

