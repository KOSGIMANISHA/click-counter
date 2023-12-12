/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'

// eslint-disable-next-line import/no-useless-path-segments
// eslint-disable-next-line import/no-unresolved
import './index.css'

// eslint-disable-next-line no-unused-vars
class ClickCounter extends Component {
  state = {
    count: 0,
  }

  // eslint-disable-next-line no-undef
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked
          <br /> <span className="count">{count}</span> times
        </h1>
        <p className="descripition">Click the button to increase the count!</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
