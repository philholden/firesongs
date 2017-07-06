import React from 'react'
import * as firebase from 'firebase';

export default class FirebaseFac extends React.Component {
  state = {
    loaded: false,
    data: {},
  }

  setData = data => this.ref.set(data)

  componentDidMount() {
    const { path } = this.props

    this.ref = firebase.database().ref(path)

    this.ref.on('value', snap => {
      console.log(snap.val())
      this.setState({
        data: snap.val(),
        loaded: true,
      })
    })
  }

  render () {
    console.log(JSON.stringify(this.state.data))
    if (!this.state.loaded) {
      return null
    }
    return this.props.children(
      this.state.data,
      this.setData
    )
  }

}
