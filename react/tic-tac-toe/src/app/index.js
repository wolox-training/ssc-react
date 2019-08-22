import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import loginActions from '../redux/login/actions';
import { history } from '../redux/store';
import { ROUTES } from '../constants/routes';

import ComponentRoute from './routes';
import '../scss/application.scss';

class App extends Component {
  componentDidMount() {
    const { handleSetLogin } = this.props;
    handleSetLogin();
  }

  render() {
    const { authed } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          { ROUTES.map(route => <ComponentRoute path={route.path} component={route.component} isPrivate={route.private} key={route.path} authed={authed} />)}
        </Switch>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  authed: bool,
  handleSetLogin: func
};

const mapDispatchToProps = dispatch => ({
  handleSetLogin: () => dispatch(loginActions.setAuth())
});

const mapStateToProps = state => ({
  authed: state.login.isUserLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
