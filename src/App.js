import React from 'react';
import PublicMain from './containers/PublicMain';
import PrivateMain from './containers/PrivateMain';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class App extends React.Component {



  render() {
    let routes = <PublicMain />

    if (this.props.isAuth) {
      routes = <PrivateMain />

    }
    return (<>


      {routes}

    </>)
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token
  }
}
export default connect(mapStateToProps, null)(App);
