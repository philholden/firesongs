import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZdBUh9Ycipc2cN-eeOQ4IQN7DdV72jko",
  authDomain: "songs-dcd05.firebaseapp.com",
  databaseURL: "https://songs-dcd05.firebaseio.com",
  storageBucket: "songs-dcd05.appspot.com",
  messagingSenderId: "798268740653"
};

firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
