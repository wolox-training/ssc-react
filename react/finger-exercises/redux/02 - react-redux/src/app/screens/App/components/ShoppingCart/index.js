import React, { PureComponent, Fragment } from 'react';
import { arrayOf, func } from 'prop-types';
import Button from '@components/Button';
import { connect } from 'react-redux';
import bookActions from '@redux/book/actions';
import { bookSelectedPropType } from '@constants/propTypes';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends PureComponent {
  state = {
    open: false
  };

  toggleContent = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => {
    const { handleAddItem, handleDeleteItem } = this.props;
    return <Item key={item.id} item={item} addItem={handleAddItem} removeItem={handleDeleteItem} />;
  };

  render() {
    const { bookSelected } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{bookSelected.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {bookSelected.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  bookSelected: arrayOf(bookSelectedPropType).isRequired,
  handleAddItem: func.isRequired,
  handleDeleteItem: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleAddItem(item) {
    dispatch(bookActions.addItem(item));
  },
  handleDeleteItem(item) {
    dispatch(bookActions.removeItem(item));
  }
});

const mapStateToProps = state => ({
  bookSelected: state.bookSelected
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
