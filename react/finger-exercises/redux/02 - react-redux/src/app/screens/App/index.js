import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import store from '@redux/store';
import actionsCreators from '@redux/book/actions';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: [],
    bookSelected: []
  };

  componentDidMount() {
    const { data } = this.props;
    store.subscribe(() => {
      const { books, bookSelected } = store.getState();
      this.setState({ books, bookSelected });
    });
    // TODO to implement the dispatch
    store.dispatch(actionsCreators.getBooks(data));
  }

  // TODO to implement the dispatch
  // eslint-disable-next-line no-unused-vars
  onSearch = value => {};

  // TODO to implement the dispatch
  // eslint-disable-next-line no-unused-vars
  addToCart = item => {};

  // TODO to implement the dispatch
  // eslint-disable-next-line no-unused-vars
  addItem = itemId => {};

  // TODO to implement the dispatch
  // eslint-disable-next-line no-unused-vars
  removeItem = itemId => {};

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.state.books.length ? (
            this.state.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.state.bookSelected.length ? (
          <ShoppingCart data={this.state.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]))
};

export default App;
