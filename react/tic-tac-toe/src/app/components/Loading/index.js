import React from 'react';
import Spinner from 'react-spinkit';

function Loading (Component) {
  return function LoadingComponent({ loading, ...props }) {
    if (!loading) {
      return <Component {...props} />;
    }
    return <Spinner className="spinner" name="circle" fadeIn="none" />;
  };
}

export default Loading;
