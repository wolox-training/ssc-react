import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import loginActions from '../redux/login/actions';
import { history } from '../redux/store';
import { ROUTES } from '../constants/routes';

import Navbar from './components/Navbar';
import RenderRoutes from './routes/RenderRoutes';
import '../scss/application.scss';

class App extends Component {
  state = {
    redirectToReferrer: false
  }

  componentDidMount() {
    const { handleSetLogin } = this.props;
    handleSetLogin();
    this.setRedirectToReferrer();
  }

  setRedirectToReferrer = () => {
    const redirectToReferrer = this.props.handleSetLogin();
    this.setState({ redirectToReferrer });
  }

  render() {
    const { authed } = this.props;
    if (!this.state.redirectToReferrer) {
      return <Fragment>Loading...</Fragment>;
    }
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          {authed && <Navbar />}
          <Switch>
            {
              ROUTES.map(route => (
                <RenderRoutes
                  isPrivate={route.private}
                  key={route.path}
                  authed={authed}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
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
  handleSetLogin: () => dispatch(loginActions.setAuth())
});

const mapStateToProps = state => ({
  authed: state.login.isUserLoggedIn
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
