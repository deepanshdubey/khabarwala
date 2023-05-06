import React, { Component } from 'react'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src="/loading.gif" alt="loading..." style={{display: 'flex',  justifyContent: 'center', margin: 'auto'}} />
      </div>

    )
  }
}
