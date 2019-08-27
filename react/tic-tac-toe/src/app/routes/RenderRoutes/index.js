import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

import { PATHS } from '../../../constants/routes';

const RenderRoutes = ({ isPrivate, component: Component, authed, ...rest }) => {
  if (isPrivate) {
    return (
      <Route
        {...rest}
        // eslint-disable-next-line react/jsx-no-bind
        render={
          props => authed
            ? <Component {...props} />
            : <Redirect to={{ pathname: PATHS.login, state: { from: props.location } }} />
        }
      />
    );
  }
  return (
    <Route
      {...rest}
      // eslint-disable-next-line react/jsx-no-bind
      render={
        props => {
          if (authed && props.location.pathname !== '/') {
            return <Component {...props} />;
          }
          return <Redirect to={PATHS.game} />;
        }
      }
    />
  );
};

RenderRoutes.propTypes = {
  authed: bool,
  component: func,
  path: string
};

export default RenderRoutes;
