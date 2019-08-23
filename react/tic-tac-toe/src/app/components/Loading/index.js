import React from 'react';

function Loading (Component) {
  return function LoadingComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    }
    return (
      <div>
        <p>
          Loading...
        </p>
      </div>
    );
  };
}

export default Loading;
