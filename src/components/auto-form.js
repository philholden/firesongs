import React, { Component } from 'react';

import * as firebase from 'firebase';

export default class AutoForm extends Component {
  state = this.props.value || this.props.defaultValue || { }

  onSubmit = e => {
    e.preventDefault()
    const {onChange} = this.props
    if (!onChange) return
    onChange(this.state)
  }

  getFormEl = el => { if (el !== null) this.formEl = el }

  update = ({ target }) => this.setState({
    [target.name]: target.value,
  })

  render() {
    const { onSubmit, update, getFormEl } = this
    const { structure } = this.props
    const { state, value } = this
    return (
      <form onSubmit={onSubmit} ref={getFormEl}>
        {
          structure.map(({key, label, type, placeholder}) => {
            switch(type) {
              case 'text': return (
                <label key={'l'+ key}>{label}<input
                  key={key}
                  type="text"
                  value={state[key] || ''}
                  onChange={update}
                  name={key}
                /></label>
              )
              case 'textarea': return (
                <label key={'l'+ key}>{label}<textarea
                  key={key}
                  value={state[key] || ''}
                  onChange={update}
                  name={key}
                /></label>
              )
            }
          })
        }
        <button>Submit</button>
      </form>
    )
  }
}
