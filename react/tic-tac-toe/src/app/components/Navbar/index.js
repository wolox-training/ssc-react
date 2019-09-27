import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../assets/LogoWolox.png';
import loginActions from '../../../redux/login/actions';
import { PATHS } from '../../../constants/routes';

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
        <ul>
          <Link to={PATHS.matches} className={styles.itemNav}>Matches</Link>
          <Link to={PATHS.game} className={styles.itemNav}>Game</Link>
          <button className={styles.buttonLogout} type="button" onClick={this.handleLogout}>Logout</button>
        </ul>
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

const mapStateToProps = state => ({
  pathname: state.router.location.pathname
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
