import React from 'react'
import * as firebase from 'firebase';
export default class FirebaseValue extends React.Component {
  state = {
    loaded: false,
    data: null,
  }

  static defaultProps = {
    prop: 'value',
    hidden: {},
  }

  onChange = e => {
    const { hidden } = this.props
    let value = e
    if (e.target) value = e.target.value
    this.ref.set({
      ...hidden,
      ...value,
    })
  }

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
    if (!this.state.loaded) {
      return null
    }
    const { children } = this.props;
    return React.cloneElement(children, {
      value: this.state.data,
      onChange: this.onChange,
    })
  }

}
