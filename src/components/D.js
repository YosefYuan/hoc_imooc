import React from 'react'
const modifyPropHoc = (wrappedComponent) => class NewComponent extends wrappedComponent {
  render(){
    const element = super.render();
    console.log("element", element.props.children);
    const newStyle = {
      color: element.type === 'div' ? 'red' : 'green'
    };
    const newProps = {...this.props, style:newStyle};
    return React.cloneElement(element, newProps, element.props.children);
  }
}
export default modifyPropHoc 