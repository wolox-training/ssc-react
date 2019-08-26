import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../assets/LogoWolox.png';
import loginActions from '../../../redux/login/actions';

import styles from './styles.module.scss';

class Navbar extends Component {
  handleLogout = () => {
    const { handleLogout } = this.props;
    handleLogout();
  }

  render() {
    const { pathname } = this.props;
    const to = pathname === '/game' ? '/matches' : '/game';
    const label = to.substring(1);
    return (
      <div className={styles.navbarContainer}>
        <img src={Logo} className={styles.imageLogo} alt="logo" />
        <ul>
          <Link to={to} className={styles.itemNav}>{label}</Link>
          <button className={styles.buttonLogout} type="button" onClick={this.handleLogout}>Logout</button>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {
  handleLogout: func,
  pathname: string
};

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(loginActions.logOut())
});

const mapStateToProps = state => ({
  pathname: state.router.location.pathname
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
