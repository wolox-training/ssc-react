import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import loginActions from '../redux/login/actions';
import { history } from '../redux/store';
import { ROUTES } from '../constants/routes';

import RenderRoutes from './routes/RenderRoutes';
import '../scss/application.scss';

class App extends Component {
  state ={
    initApp: true
  };

  componentDidMount() {
    const { handleSetLogin } = this.props;
    handleSetLogin(this.handleSet);
  }

  handleSet = () => {
    this.setState({ initApp: false });
  }

  render() {
    const { authed } = this.props;
    const { initApp } = this.state;
    if (initApp) {
      return <div>Loading</div>;
    }
    return (
      <ConnectedRouter history={history}>
        <Switch>
          {
            ROUTES.map(route => (
              <RenderRoutes
                isPrivate={route.private}
                key={route.path}
                authed={authed}
                path={route.path}
                component={route.component}
              />
            ))
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
  handleSetLogin: exec => dispatch(loginActions.setAuth(exec))
});

const mapStateToProps = state => ({
  authed: state.login.isUserLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
