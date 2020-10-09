import classes from './DashBoard.module.scss'
import React from 'react'
import Nav from '../../components/UI/Nav/Nav'
import Sidebar from '../../components/Layout/Sidebar/SideBar'

class DashBoard extends React.Component {

    render() {


        return (
            <>
                <section className ={classes.mainWrapper}>
                    <Nav />
                    <Sidebar />

                    <main >
                        {this.props.children}
                    </main>
                </section>

            </>
        )
    }
}

export default DashBoard