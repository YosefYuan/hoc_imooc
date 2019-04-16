import React, { Component } from "react"
import A from "./A"
class C extends Component {
  render() {
    return <div>这时C组件</div>
  }
}

export default A(C)
