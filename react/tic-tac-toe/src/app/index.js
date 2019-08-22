import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import loginActions from '../redux/login/actions';
import { history } from '../redux/store';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../constants/routes';

import Game from './screens/Game';
import Matches from './screens/Matches';
import Login from './screens/Login';
import PrivateRoute from './routes/PrivateRoutes';
import PublicRoute from './routes/PublicRoutes';
import '../scss/application.scss';

class App extends Component {
  componentDidMount() {
    const { handleSetLogin } = this.props;
    handleSetLogin();
  }

  render() {
    const { authed } = this.props;
    if (authed) {
      return (
        <ConnectedRouter history={history}>
          <Switch>
            <PrivateRoute authed={authed} path="/game" component={Game} />
            <PrivateRoute authed={authed} path="/matches" component={Matches} />
            <PublicRoute authed={authed} exact path="/" component={Login} />
          </Switch>
        </ConnectedRouter>
      );
    }
    return <Login />;
  }
}

App.propTypes = {
  authed: bool,
  handleSetLogin: func
};

const mapDispatchToProps = dispatch => ({
  handleSetLogin: () => dispatch(loginActions.setLogin())
});

const mapStateToProps = state => ({
  authed: state.login.isUserLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
