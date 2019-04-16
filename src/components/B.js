import React, { Component } from "react"
import A from "./A"
class B extends Component {
  render() {
    return <div>这时B组件 </div>
  }
}
export default A(B)
