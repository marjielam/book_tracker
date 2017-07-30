/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Book from '../components/Book';
import BookForm from '../components/BookForm';
import { addBook } from '../actions/books';
import { getCurrentUser } from '../actions/user';
import { getBooks } from '../actions/books';


class Books extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitBook = this.handleSubmitBook.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentUser(this.props.route.currentUserId);
    this.props.getBooks(this.props.route.currentUserId);
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
        <div className="add-book">
          <h1>BOOKTRACKER</h1>
          <BookForm
          handleSubmitBook={this.handleSubmitBook}
          />
        </div>
        <div className="book-list">
          {books}
        </div>
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
    },
    getCurrentUser: (currentUserId) => {
      dispatch(getCurrentUser(currentUserId));
    },
    getBooks: (currentUserId) => {
      dispatch(getBooks(currentUserId));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
