import React, { Component } from 'react';

import './app.css';
import SignIn from './sign-in'
import SongEditor from './song-editor'
import AutoForm from './auto-form'
import FirebaseFac from './firebase-fac'
import FireProp from './firebase-prop'
import FireBind from './firebase-ctrl'
import CreateGroupForm from './create-group-form'
import * as firebase from 'firebase'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
window.firebase = firebase

// import styled from 'styled-components'

// const P = styled.p`
//   color: blue;
// `


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={SignIn} />
        </BrowserRouter>

<hr />
<CreateGroupForm />
        <hr />

        <FireProp path="react/speed" prop="children">
          <h2 />
        </FireProp>
<hr />

        <FireBind path="react/speed">
          <textarea />
        </FireBind>
<hr />
        <FireBind path="react">
          <AutoForm
            structure={[
              {
                key: 'speed',
                label: 'Speed',
                type: 'text',
              }
            ]}
          />
        </FireBind>
<hr />
        <FireBind path="songs/1">
          <AutoForm
            structure={[
              {
                key: 'title',
                label: 'Title',
                type: 'text',
              },
              {
                key: 'author',
                label: 'Author',
                type: 'text',
              },
              {
                key: 'text',
                label: 'text',
                type: 'textarea',
              },
            ]}
          />
        </FireBind>
<hr/>
        <FirebaseFac path="react">
         {
          (data, setData) => (
            <AutoForm
              defaultValue={data}
              onChange={setData}
              structure={[
                {
                  key: 'speed',
                  label: 'Speed',
                  type: 'text',
                }
              ]}
            />
          )
          }
        </FirebaseFac>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
