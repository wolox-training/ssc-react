import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';

import dataActions from '../../../redux/login/actions';
import Logo from '../../assets/LogoWolox.png';

import styles from './styles.module.scss';
import RegisterForm from './components/Form';

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { body, handleOnLogin } = this.props;
    handleOnLogin(body.values);
  }

  render() {
    return (
      <div className={styles.containerCard}>
        <img src={Logo} className={styles.imageLogo} />
        <RegisterForm onHandleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

Login.propTypes = {
  handleOnLogin: func.isRequired,
  body: shape({
    email: string,
    password: string
  })
};

const mapDispatchToProps = dispatch => ({
  handleOnLogin: values => dispatch(dataActions.onLogin(values))
});

const mapStateToProps = state => ({
  body: state.form.register
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
