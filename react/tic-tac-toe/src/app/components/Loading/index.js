import React from 'react';
import Spinner from 'react-spinkit';

function Loading (Component) {
  return function LoadingComponent({ loading, ...props }) {
    if (!loading) {
      return <Component {...props} />;
    }
    return (
      <div>
        <Spinner name="circle" fadeIn="none" />
      </div>
    );
  };
}

export default Loading;
