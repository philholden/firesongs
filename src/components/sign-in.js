import React from 'react'

import * as firebase from 'firebase';
import * as firebaseUi from 'firebaseui'
import NavBar from './nav-bar'

const outerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}

const innerStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-around',
  display: 'flex',
  flexDirection: 'column'
}

const uiConfig = {
  //signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: 'http://localhost:3000',
  callbacks: { signInSuccess: () => false },
};

// const style = {
//   width: '100vw',
//   height: '100vh',
//   overflow: 'auto',
//   podition: 'absolute',
//   top: 0,
//   left: 0,
// }

export default class SignIn extends React.Component {
  state = {
    speed: 10
  }

  ui = new firebaseUi.auth.AuthUI(firebase.auth());

  renderLogin = () => {
    //const ui = new firebaseUi.auth.AuthUI(firebase.auth());
    this.ui.start('#firebaseui-auth-container', uiConfig)
  }

  loginCallback = user => {
    console.log(user)
    if (user) {
      this.setState({user: user})
    } else {
      this.setState({
        user: null
      }, this.renderLogin)
    }
  }

  componentDidMount() {
    const { renderLogin, loginCallback } = this
    //renderLogin()
    firebase.auth().onAuthStateChanged(
      loginCallback,
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    const { user } = this.state
    return (
      <div style={outerStyle}>
        <NavBar title="Sign In" />
        { !user ? null :
          <div style={innerStyle}>
            <div><b>Name:</b> {user.displayName}</div>
            <div><b>Email:</b> {user.email}</div>
            <div><b>Id:</b> {user.uid}</div>
            <img width={100} src={user.photoURL} style={{display: 'block'}}/>
            <button onClick={() => firebase.auth().signOut()}>
              sign out
            </button>
          </div>

        }

        <div
          id="firebaseui-auth-container"
          style={{
            display: user ? 'none' : 'block',
            ...innerStyle
          }}
        />
      </div>
    )
  }
}
