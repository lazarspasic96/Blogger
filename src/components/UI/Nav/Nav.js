import React from 'react'
import classes from './NavBar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { connect } from 'react-redux'

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

        let routes = (<>
            <li className={classes.item}>  <Link onClick = {this.toogleNavBar} className={classes.navLink} to='/authorization'>Log In </Link></li>
            <li className={classes.item}> <Link onClick = {this.toogleNavBar}className={classes.navLink} to='/posts'>Articles </Link></li>
            <li className={classes.item}> <Link onClick = {this.toogleNavBar}className={classes.navLink} to='/our-story'>Our Story </Link></li>
            <li className={classes.item}> <Link onClick = {this.toogleNavBar}className={classes.navLink} to='/get-started'> Get Stared </Link></li>
        </>)

        if (this.props.isAuth) {
            routes = (
                <>
                    <li className={classes.item}> <Link onClick = {this.toogleNavBar}className={classes.navLink} to='/new-post'>New Post </Link></li>
                    <li className={classes.item}> <Link onClick = {this.toogleNavBar}className={classes.navLink} to='/my-posts'>My Posts </Link></li>
                    <li className={classes.item}> <Link onClick = {this.toogleNavBar}className={classes.navLink} to='/posts'>Discover</Link></li>
                    <li className={classes.item}> <Link onClick = {this.toogleNavBar}className={classes.navLink} to='/logout'> Logout</Link></li>

                </>
            )
        }


        return (
            <>

                <div className={classes.navBar}>
                    <Button clicked={this.toogleNavBar} className={classes.navBtn}>
                        <div className={this.state.toogleClass ? classes.rotate : classes.default}></div>
                        <div className={this.state.toogleClass ? classes.rotate : classes.default}></div>
                        <div className={this.state.toogleClass ? classes.rotate : classes.default}></div>

                    </Button>

                    <div className={classes.btnBox} style={this.state.toogleClass ? { transform: 'scale(80)' } : null}>

                    </div>

                    <nav className={classes.navigation} style={!this.state.toogleClass ? { display: 'none' } : null}>
                        <ul className={classes.navigationList} >
                            {routes}
                        </ul>
                    </nav>




                </div>

            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.token
    }
}

export default connect(mapStateToProps, null)(NavBar)

