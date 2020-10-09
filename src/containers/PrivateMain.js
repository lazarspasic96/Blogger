import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import {Route, Switch} from 'react-router-dom'
import NewArticle from './DashBoard/NewArticle/NewArticle'

class PrivateMain extends React.Component {


    render() {
        return <>
        
        
              
                <Route  path='/'>

          
                    <DashBoard>
                   <Switch>
                       <Route path = '/new-article' component = {NewArticle} />
                   </Switch>
                  </DashBoard>
               
                  


                </Route>
          
        

        </>
    }
}

export default PrivateMain;