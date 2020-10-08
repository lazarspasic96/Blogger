import classes from './DashBoard.module.scss'
import React from 'react'
import Nav from '../../components/UI/Nav/Nav'
import Sidebar from '../../components/Layout/Sidebar/SideBar' 

class DashBoard extends React.Component {

    render() {


        return (
            <>
                <Nav />
                <Sidebar />
                
                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default DashBoard