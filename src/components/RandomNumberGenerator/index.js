// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onRandomNum = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)
      return {count: num}
    })
  }

  render() {
    const {count} = this.state
    const msg = count <= 100 ? count : count % 100
    return (
      <div className="main-container">
        <div className="mini-container">
          <h1>Random Number</h1>
          <br />
          <p>Generate a random number in the range of 0 to 100</p>
          <br />
          <button type="button" onClick={this.onRandomNum}>
            Generate
          </button>
          <br />
          <p className="head">{msg}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
