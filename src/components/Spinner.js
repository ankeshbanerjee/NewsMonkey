import React, { Component } from 'react'
import loading from '../spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="" style={{paddingTop : '50px'}}/>
      </div>
    )
  }
}

export default Spinner
