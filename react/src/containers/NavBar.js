/*jshint esversion: 6 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../actions/user';
import { getBooks } from '../actions/books';

class NavBar extends Component {
  componentWillMount() {
    this.props.getCurrentUser(this.props.route.currentUserId);
    this.props.getBooks(this.props.route.currentUserId);
  }

  render() {
    return (
      <div className="navbar">
        <h1>
          <Link to="/">&#128214; Book Tracker 	&#128218;</Link>
        </h1>
        { React.cloneElement(this.props.children, this.props) }
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
    getCurrentUser: (currentUserId) => {
      dispatch(getCurrentUser(currentUserId));
    },
    getBooks: (currentUserId) => {
      dispatch(getBooks(currentUserId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
