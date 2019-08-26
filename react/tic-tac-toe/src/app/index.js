import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import loginActions from '../redux/login/actions';
import { history } from '../redux/store';
import { ROUTES } from '../constants/routes';

import RenderRoutes from './routes/RenderRoutes';
import Navbar from './components/Navbar';
import '../scss/application.scss';

class App extends Component {
  state ={
    redirectToReferrer: false
  };

  componentDidMount() {
    const { handleSetLogin } = this.props;
    handleSetLogin();
    this.setIfRedirect();
  }

  setIfRedirect = () => {
    const redirectToReferrer = this.props.handleSetLogin();
    this.setState({ redirectToReferrer });
  }

  render() {
    const { authed } = this.props;
    const { redirectToReferrer } = this.state;
    if (!redirectToReferrer) {
      return <div>Loading...</div>;
    }
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          {authed ? <Navbar /> : null}
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
        </Fragment>
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
