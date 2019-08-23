import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

const RenderRoutes = ({ isPrivate, component: Component, authed, rest }) => {
  if (isPrivate) {
    return (
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
  }
  return (
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
};

RenderRoutes.propTypes = {
  authed: bool,
  component: func,
  path: string
};

export default RenderRoutes;
