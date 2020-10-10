import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import {Route, Switch} from 'react-router-dom'
import NewPost from './DashBoard/NewPost/NewPost'
import Authorization from './Authorization/Authorization';

class PrivateMain extends React.Component {


    render() {
        return <>
        
        
              
                <Route  path='/'>

          
                    <DashBoard>
                   <Switch>
                       <Route path = '/new-post' component = {NewPost} />
                       <Route exact path='/authorization' component={Authorization} />
                   </Switch>
                  </DashBoard>
               
                  


                </Route>
          
        

        </>
    }
}

export default PrivateMain;