import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import { history } from '../redux/store';
import dataActions from '../redux/login/actions';
import { routes } from '../constants/routes';
import '../scss/application.scss';

class App extends Component {
  componentDidMount() {
    const { handleUserLogged } = this.props;
    handleUserLogged();
  }

  getRenderGame = ({ component: RouteComponent, path }) => {
    const { authed } = this.props;
    return () => authed ? <RouteComponent /> : <Redirect to={path} />;
  }

  getRenderLogin = ({ component: RouteComponent, path }) => {
    const { authed } = this.props;
    return () => authed === false ? <RouteComponent /> : <Redirect to={path} />;
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/game" render={this.getRenderGame(routes.game)} />
          <Route exact path="/" render={this.getRenderLogin(routes.login)} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  handleUserLogged: func.isRequired,
  authed: bool
};

const mapDispatchToProps = dispatch => ({
  handleUserLogged: () => dispatch(dataActions.setLogin())
});

const mapStateToProps = state => ({
  authed: state.login.isUserLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
