import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

/* import { PATHS } from '../../../constants/routes'; */

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    // eslint-disable-next-line react/jsx-no-bind
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to="/game" />
    }
  />
);

PublicRoute.propTypes = {
  authed: bool,
  component: func,
  path: string
};

export default PublicRoute;
