import React, { Component } from 'react';

import * as firebase from 'firebase';

const createId = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(
    /[xy]/g,
    c => {
      let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });

export default class SongEditor extends Component {
  state = {
    id: this.props.id || createId() ,
    songName: this.props.songName || '',
    author: this.props.author || '',
    verses: this.props.verses || '',
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }

  getFormEl = el => { if (el !== null) this.formEl = el }

  update = ({ target }) => this.setState({
    [target.name]: target.value,
  })

  render() {
    const { onSubmit, update, getFormEl } = this
    const { songName, verses, author } = this.state
    return (
      <form onSubmit={onSubmit} ref={getFormEl}>
        <input value={songName} onChange={update} name="songName" />
        <input value={author} onChange={update} name="songName" />
        <textarea value={verses} onChange={update} name="verses" />
        <button>Submit</button>
      </form>
    )
  }
}
