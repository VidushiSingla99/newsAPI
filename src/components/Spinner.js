import React, { Component } from 'react'


export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
          <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="loading"/>
      </div>
    )
  }
}

export default Spinner