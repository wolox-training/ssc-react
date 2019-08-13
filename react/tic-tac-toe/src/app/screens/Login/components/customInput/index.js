import React from 'react';

export const customInput = props => {
  const { input, type, label, meta } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} />
      {meta.error && meta.touched && (
        <div>{meta.error}</div>
      )}
    </div>
  );
};
