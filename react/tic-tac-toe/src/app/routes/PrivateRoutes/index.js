import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

import { PATHS } from '../../../constants/routes';

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    // eslint-disable-next-line react/jsx-no-bind
    render={
      props => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
);

PrivateRoute.propTypes = {
  authed: bool,
  component: func,
  path: string
};

export default PrivateRoute;
