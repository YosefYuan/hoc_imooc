import React, { Component } from "react"
// import logo from "./logo.svg"
import "./App.css"
// import A from "./components/A"
import B from "./components/B"
import C from "./components/C"
class App extends Component {
  render() {
    return (
      <>
        <div className="App">这是我的APP</div>
        <B />
        <C />
      </>
    )
  }
}

export default App
