import React from 'react'
import Header from '../components/Layout/Header/Header';
import { Route, Switch } from 'react-router-dom'
import Authorization from './Authorization/Authorization';
import Posts from './Posts/Posts';
import ReadPost from './ReadPost/ReadPost';
import OurStory from '../components/Layout/OurStory/OurStory';


class PublicMain extends React.Component {


    render() {
        return <>
            <Switch>
                <Route exact path='/' component={Header} />
                {/*         <Route  path = '/' component = {Footer} /> */}
             
                <Route exact path='/posts' component={Posts} />
                <Route exact path='/authorization' component={Authorization} />
                <Route exact path='/post/:id' component={ReadPost} />
                <Route exact path='/our-story' component={OurStory} />
            </Switch>

        </>
    }
}

export default PublicMain;