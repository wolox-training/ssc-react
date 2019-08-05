import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import bookActions from '@redux/book/actions';
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
    store.subscribe(() => {
      const { books, originalData, bookSelected } = store.getState();
      this.setState({ bookSelected });
      if (books.length > 0) this.setState({ books });
      else this.setState({ books: originalData });
    });
    store.dispatch(bookActions.getBooks());
  }

  onSearch = value => {
    const { books } = this.state;
    const result = value && books.filter(book => book.name.toLowerCase().includes(value.toLowerCase()));
    store.dispatch(bookActions.searchBook(result));
  };

  addToCart = item => {
    this.setState(
      prevState => ({ bookSelected: [...prevState.bookSelected, item] }),
      () => {
        const { bookSelected } = this.state;
        store.dispatch(bookActions.addToCart(bookSelected));
      }
    );
  };

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
        {this.state.bookSelected.length ? <ShoppingCart /> : null}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
