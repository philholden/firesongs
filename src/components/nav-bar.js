import React from 'react'

const NavBar = props => {

  const { keyColor, title } = props

  const outerStyle = {
    height: 45,
    backgroundColor: keyColor || 'teal',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: '#fff'
  }

  const titleStyle = {
    flex: 1,
    fontFamily: 'sans-serif',
    fontWeight: 600,
    textAlign: 'center',
  }

  return (
    <div style={outerStyle}>
      <svg fill="currentColor" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <div style={titleStyle}>{title}</div>
      <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
      <svg fill="currentColor" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </div>
  )
}

export default NavBar
