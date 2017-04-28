/*jshint esversion: 6 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUser } from '../actions/user';

class NavBar extends Component {
  componentWillMount() {
    this.props.getCurrentUser(this.props.route.currentUserId);
  }

  render() {
    return (
      <div className="navbar">
        <h1>
          <Link to="/">Book Tracker</Link>
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

// switch this back to the other syntax so I can fetch the entire user
let mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: (currentUserId) => {
      dispatch(getCurrentUser(currentUserId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
