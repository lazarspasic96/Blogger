import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import {Route, Switch} from 'react-router-dom'
import NewPost from './DashBoard/NewPost/NewPost'

class PrivateMain extends React.Component {


    render() {
        return <>
        
        
              
                <Route  path='/'>

          
                    <DashBoard>
                   <Switch>
                       <Route path = '/new-post' component = {NewPost} />
                   </Switch>
                  </DashBoard>
               
                  


                </Route>
          
        

        </>
    }
}

export default PrivateMain;