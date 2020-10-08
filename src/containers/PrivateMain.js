import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import {Route, Switch} from 'react-router-dom'
class PublicMain extends React.Component {


    render() {
        return <>
            <Switch>
              
                <Route  path='/dashboard'>
                  <DashBoard>
                    
                  </DashBoard>
                </Route>
          
            </Switch>

        </>
    }
}

export default PublicMain;