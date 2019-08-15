import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import LoginActions from '../../../redux/login/actions';
import Logo from '../../assets/LogoWolox.png';

import styles from './styles.module.scss';
import RegisterForm from './components/Form';

class Login extends Component {
  handleSubmit = values => {
    const { handleOnLogin } = this.props;
    handleOnLogin(values);
  }

  render() {
    const { error } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.containerCard}>
          <img src={Logo} className={styles.imageLogo} alt="login" />
          <RegisterForm form="register" onSubmit={this.handleSubmit} />
          <p className={styles.errorUser}>{error && 'Wrong user or password'}</p>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleOnLogin: func.isRequired,
  error: bool
};

const mapDispatchToProps = dispatch => ({
  handleOnLogin: values => dispatch(LoginActions.onLogin(values))
});

const mapStateToProps = state => ({
  error: state.login.isUserError
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
