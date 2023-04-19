import { Component } from "react";
import './App.css'

import Clock from './components/Clock'

class App extends Component {
  state = {
    isState: true,
  }

  onToggle = () => {
    this.setState(preveState => {
      const { isState } = this.state
      return {
        isState: !isState
      }
    })
  }


  render() {

    const { isState } = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <h1>CLOCK APP</h1>
          <button onClick={this.onToggle}> {isState ? "Hide" : "Show"}</button>
          {isState && <Clock />}
        </div>
      </div>

    )
  }
}
export default App 