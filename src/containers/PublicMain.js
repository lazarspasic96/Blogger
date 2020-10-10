import React from 'react'
import Header from '../components/Layout/Header/Header';
import { Route, Switch } from 'react-router-dom'
import Footer from '../components/Layout/Footer/Footer'
import Authorization from './Authorization/Authorization';
import Posts from './Posts/Posts';


class PublicMain extends React.Component {


    render() {
        return <>
            <Switch>
                <Route exact path='/' component={Header} />
                {/*         <Route  path = '/' component = {Footer} /> */}
             
                <Route exact path='/articles' component={Posts} />
                <Route exact path='/authorization' component={Authorization} />
            </Switch>

        </>
    }
}

export default PublicMain;