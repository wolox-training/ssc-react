import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { func } from 'prop-types';

import { customInput } from '../customInput';
import { validMail, minLength } from '../../../../../utils/validation';

function RegisterForm(props) {
  const { onHandleSubmit } = props;
  return (
    <form onSubmit={onHandleSubmit}>
      <Field
        name="email"
        component={customInput}
        type="text"
        label="e-mail"
        validate={validMail}
      />
      <Field
        name="password"
        component={customInput}
        type="text"
        label="password"
        validate={minLength}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

RegisterForm.propTypes = {
  onHandleSubmit: func.isRequired
};

export default reduxForm({ form: 'register' })(RegisterForm);
