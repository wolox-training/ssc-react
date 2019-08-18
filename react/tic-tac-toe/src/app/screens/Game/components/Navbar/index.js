import React from 'react';
import { func } from 'prop-types';

import Logo from '../../../../assets/LogoWolox.png';

import styles from './styles.module.scss';

function Navbar(props) {
  return (
    <div className={styles.navbarContainer}>
      <img src={Logo} className={styles.imageLogo} alt="logo" />
      <button className={styles.buttonLogout} type="button" onClick={props.handleLogout}>Logout</button>
    </div>
  );
}

Navbar.propTypes = {
  handleLogout: func
};

export default Navbar;
