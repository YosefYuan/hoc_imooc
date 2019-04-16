import React, { Component } from "react"

export default function A(WrappedComp) {
  return class A extends Component {
    render() {
      return (
        <>
          <div> 这时A组件容器 </div> <WrappedComp />
        </>
      )
    }
  }
}
