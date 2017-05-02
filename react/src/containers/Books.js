/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import { addBook } from '../actions/books';


class Books extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitBook = this.handleSubmitBook.bind(this);
  }

  handleSubmitBook(e) {
    e.preventDefault();
    this.props.addBook(this.props.route.currentUserId);
  }

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
      <div>
        {books}
        <BookForm
        handleSubmitBook={this.handleSubmitBook}
        />
      </div>
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
    addBook: (currentUserId) => {
      dispatch(addBook(currentUserId));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
