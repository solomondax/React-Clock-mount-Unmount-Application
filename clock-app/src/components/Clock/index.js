import './index.css'
import { Component } from 'react'

class Clock extends Component {

  state = { date: new Date() }


  componentDidMount() {
    console.log("did mount called")
    this.timerID = setInterval(this.tick, 1000)
  }
  componentWillUnmount() {
    console.log("unmountcalled")
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState({ date: new Date() })
  }
  render() {
    console.log("render")
    const { date } = this.state
    return (
      <div className='container'>
        <h1>Clock</h1>
        <p>t{date.toLocaleTimeString()}</p>
      </div>

    )
  }
}
export default Clock