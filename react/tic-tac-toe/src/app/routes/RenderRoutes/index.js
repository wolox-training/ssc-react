import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

import { PATHS } from '../../../constants/routes';

const RenderRoutes = ({ isPrivate, component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    // eslint-disable-next-line react/jsx-no-bind
    render={
      props => {
        // eslint-disable-next-line no-extra-parens
        if ((!authed) || (isPrivate && authed) || (authed && props.location.pathname !== '/')) {
          return <Component {...props} />;
        }
        return <Redirect to={isPrivate ? { pathname: PATHS.login, state: { from: props.location } } : PATHS.game} />;
      }
    }
  />
);

RenderRoutes.propTypes = {
  authed: bool,
  component: func,
  path: string
};

export default RenderRoutes;
