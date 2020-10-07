import React from 'react'
import Header from '../components/Layout/Header/Header';
import { Route, Switch } from 'react-router-dom'
import Articles from './Articles/Articles'
import Footer from '../components/Layout/Footer/Footer'
import NavBar from '../components/UI/Nav/Nav';


class PublicMain extends React.Component {


    render() {
        return <>
            <Switch>
              <Route exact path = '/' component = {Header} />
    {/*         <Route  path = '/' component = {Footer} /> */}
    <NavBar />
               <Route exact path = '/articles' component = {Articles} /> 
            </Switch>

        </>
    }
}

export default PublicMain;