import classes from './SideBar.module.scss'
import React from 'react'
import addPost from '../../../assets/images/addPost.svg'
import bloggerLogo from '../../../assets/images/bloggerLogo.svg'
import heart from '../../../assets/images/heart.svg'
import myArticles from '../../../assets/images/myArticles.svg'
import discover from '../../../assets/images/discover.svg'
import dashboard from '../../../assets/images/dashboard.svg'
import logout from '../../../assets/images/logout.svg'
import { Link } from 'react-router-dom'


const SideBar = (props) => {

    let vh = window.innerHeight

    return (
        <>
            <aside style = {{height: vh}} className={classes.sideBar}>


                <div className={classes.logoBox}>
                    <img src={bloggerLogo} alt='' />
                    <p>Blogger</p>
                </div>

                <div className={classes.menuContainer}>
                    <Link className={classes.navLink} to='/new-post'>
                        <div className={classes.iconBox}>
                            <img src={addPost} />
                            <p>New Article</p>
                        </div>
                    </Link>

                    <Link className={classes.navLink} to='/my-posts' >
                        <div className={classes.iconBox}>
                            <img src={myArticles} />
                            <p>My Articles</p>
                        </div>
                    </Link>
                    <Link className={classes.navLink} to='/posts'>
                        <div className={classes.iconBox}>
                            <img src={discover} />
                            <p>Discover</p>
                        </div>
                    </Link>

                    <Link className={classes.navLink} to='/dashboard'>
                        <div className={classes.iconBox}>
                            <img src={dashboard} />
                            <p>Dashboard</p>
                        </div>
                    </Link>

                    <Link className={classes.navLink} to='/logout'>
                        <div className={classes.iconBox}>
                            <img src={logout} />
                            <p>Logout</p>
                        </div>
                    </Link>
    
                </div>





            </aside>

        </>
    )

}
export default SideBar