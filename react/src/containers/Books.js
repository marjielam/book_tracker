/*jshint esversion: 6 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Books extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>Books!</div>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user
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
