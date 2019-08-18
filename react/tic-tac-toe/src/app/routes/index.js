import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

import { PATHS } from '../../constants/routes';

function ComponentRoute({ component: Component, isPrivate, authed, path }) {
  if (authed && isPrivate) {
    return <Route component={Component} path={path} />;
  } else if (authed) {
    return <Redirect to={PATHS.game} />;
  } else if (isPrivate) {
    return <Redirect to={PATHS.login} />;
  }
  return <Route component={Component} path={path} />;
}

ComponentRoute.propTypes = {
  authed: bool,
  component: func,
  isPrivate: bool,
  path: string
};

export default ComponentRoute;
