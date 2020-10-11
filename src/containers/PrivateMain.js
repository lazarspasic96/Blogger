import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import {Redirect, Route, Switch} from 'react-router-dom'
import NewPost from './DashBoard/NewPost/NewPost'
import Authorization from './Authorization/Authorization';
import Logout from './Authorization/Logout/Logout';
import Posts from './Posts/Posts'

class PrivateMain extends React.Component {


    render() {
        return <>
        
        
              
                <Route  path='/'>

          
                    <DashBoard>
                   <Switch>
                       <Route path = '/new-post' component = {NewPost} />
                       <Route exact path='/authorization' component={Authorization} />
                       <Route exact path='/logout' component={Logout} />
                       <Route exact path='/posts' component={Posts} />
                       <Redirect to = '/' />
                   </Switch>
                  </DashBoard>
               
                  


                </Route>
          
        

        </>
    }
}

export default PrivateMain;