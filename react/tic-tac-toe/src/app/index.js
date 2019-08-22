import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';

import loginActions from '../redux/login/actions';
import { history } from '../redux/store';
import { ROUTES } from '../constants/routes';

import PrivateRoute from './routes/PrivateRoutes';
import '../scss/application.scss';

class App extends Component {
  state={
    loading: false
  };

  componentDidMount() {
    const { handleSetLogin } = this.props;
    handleSetLogin();
    this.changeStateLoading(true);
  }

  componentDidUpdate = prevProps => {
    if (this.props.authed !== prevProps.authed) {
      if (this.props.authed) {
        this.changeStateLoading(true);
      }
      this.changeStateLoading(false);
    }
  }

  changeStateLoading = isLogin => {
    this.setState({ loading: isLogin });
  }

  render() {
    const { authed } = this.props;
    const { loading } = this.state;
    if (loading) {
      return <div>loading...</div>;
    }
    return (
      <ConnectedRouter history={history}>
        <Switch>
          {
            ROUTES.map(route => <PrivateRoute isPrivate={route.private} key={route.path} authed={authed} path={route.path} component={route.component} />)
          }
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
  authed: state.login.isUserLoggedIn,
  loading: state.login.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
