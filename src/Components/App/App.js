import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import history from '../../history';
import { BrowserRouter as Router } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/";

class App extends Component {
  componentDidMount = () => {
    this.props.onFetchPosts();
    this.props.onPersistAuthentication();
  };

  render = () => {
    return (
      <Router history = {history}>
       <Navigation />
        <Footer />
      </Router>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPersistAuthentication: () =>
      dispatch(actionCreators.persistAuthentication()),
      onFetchPosts: () =>dispatch(actionCreators.fetchPosts())
  };
};

export default connect(null, mapDispatchToProps)(App);
