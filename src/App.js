import React, { Component } from 'react';
import PublicMain from './containers/PublicMain';
import PrivateMain from './containers/PrivateMain';
import { connect } from 'react-redux'
import * as action from './store/action/index'
import { Redirect } from 'react-router-dom';

class App extends React.Component {



  componentDidMount () {
    this.props.authCheck()
  }

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

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => (dispatch(action.checkAuth()))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
