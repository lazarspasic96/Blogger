import React from 'react'
import classes from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'

class NavBar extends React.Component {
    state = {
        toogleClass: false
    }

    toogleNavBar = () => {
        console.log('is')
        this.setState(prevState => ({
            toogleClass: !prevState.toogleClass
        }))
    }


    render() {
        let navBar = null


        return (
            <>

                <div className={classes.navBar}>
                    <Button clicked={this.toogleNavBar} className={classes.navBtn}>
                  <div className = {this.state.toogleClass ? classes.rotate : classes.default}></div>
                  <div className = {this.state.toogleClass ? classes.rotate : classes.default}></div>
                  <div className = {this.state.toogleClass ? classes.rotate : classes.default}></div>
                   
                    </Button>

                    <div className={classes.btnBox} style={this.state.toogleClass ? { transform: 'scale(80)' } : null}>

                    </div>

                    <nav className={classes.navigation} style={!this.state.toogleClass ? { display: 'none' } : null}>
                        <ul className={classes.navigationList}>
                            <li className={classes.item}> <Link className={classes.navLink} to='/authorization'>Log in </Link></li>
                            <li className={classes.item}> <Link className={classes.navLink} to='/articles'>Articles </Link></li>
                            <li className={classes.item}> <Link className={classes.navLink} to='/our-story'>Our Story </Link></li>
                            <li className={classes.item}> <Link className={classes.navLink} to='/get-started'> Get Stared </Link></li>
                        </ul>
                    </nav>




                </div>

            </>
        )
    }
}

export default NavBar

