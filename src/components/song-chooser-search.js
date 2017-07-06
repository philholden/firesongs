import React, { Component } from 'react'

export default class SongChooserSearch extends Component {

  render() {
    const {
      searchText,
      setSearchText,
      gradient,
      marginX,
      borderRadius,
      height,
      inputHeight
    } = this.props


    const outerStyle = {
      height: height,
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      color: '#fff',
      paddingLeft: marginX,
      paddingRight: marginX,
      backgroundImage: gradient
    }

    const inputWrapper = {
      height: inputHeight,
      backgroundColor: 'white',
      borderRadius: borderRadius,
      display: 'flex',
      flex: 1
    }

    const input = {
      borderWidth: 0,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      flex: 1,
      fontSize: 13,
      outline: 'none'
    }

    const icon = {
      alignSelf: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      color: '#9e9e9e'
    }

    return (
      <div style={outerStyle}>
        <div style={inputWrapper}>
          <svg style={icon} fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <input
            placeholder="Search title, content or author"
            style={input}
            type="search"
            name=""
            id=""
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </div>
    )

  }

}

export const themeVars = {
  marginX: 16,
  height: 60,
  gradient: 'linear-gradient(to right, #4699cd, #387faf)',
  inputHeight: 32,
  borderRadius: 5
}

SongChooserSearch.defaultProps = {
  ...themeVars
}

// SongChooserSearch.styleTypes = {
//   gradient: 'gradient',
//   marginX: 'length',
//   borderRadius: 'length',
//   height: 'length',
//   inputHeight: 'length'
// }

//export default SongChooserSearch
