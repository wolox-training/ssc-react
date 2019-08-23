import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import Logo from '../../assets/LogoWolox.png';
import loginActions from '../../../redux/login/actions';

import styles from './styles.module.scss';

class Navbar extends Component {
  handleLogout = () => {
    const { handleLogout } = this.props;
    handleLogout();
  }

  render() {
    return (
      <div className={styles.navbarContainer}>
        <img src={Logo} className={styles.imageLogo} alt="logo" />
        <button className={styles.buttonLogout} type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

Navbar.propTypes = {
  handleLogout: func
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(loginActions.logOut())
});

export default connect(null, mapDispatchToProps)(Navbar);
