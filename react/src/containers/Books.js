/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class Books extends Component {
  render() {
    let books;
    if (this.props.books.length > 0) {
      books = this.props.books.map((book, i) => {
        return (
          <Book
          key={i}
          book={book}
          />
        );
      });
    }
    return (
      <div>{books}</div>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user,
    books: state.books
  }
}

let mapDispatchToProps = dispatch => {
  return {
    getBooks: () => {
      dispatch(getBooks());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
