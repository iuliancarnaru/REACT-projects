import React, { Component } from 'react'

export class Timer extends Component {
  render() {
    return (
      <div>
        <p>You have been on this site since: </p> <br />
        <span>55.98</span>
        <p>Seconds</p>
      </div>
    )
  }
}

export default Timer;