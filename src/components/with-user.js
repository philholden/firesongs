import React, { Component } from 'react';

import * as firebase from 'firebase';
const withUser = (Comp) => class WithUser extends Component {
  state = {
    user: null
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    });
  }

  render() {
    return <Comp {...this.props} user={this.state.user} />
  }

}

export default withUser
