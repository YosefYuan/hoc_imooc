import React from 'react'
const modifyPropHoc = (wrappedComponent) => class NewComponent extends wrappedComponent {
  static displayName = `NewComponent(${getDisplayName(wrappedComponent)})`
  componentWillMount() {
    alert('我是修改后生命周期');
  }
  render() {
    const element = super.render();
    console.log("element", element.props.children);
    const newStyle = {
      color: element.type === 'div' ? 'red' : 'green'
    };
    const newProps = { ...this.props, style: newStyle };
    return React.cloneElement(element, newProps, element.props.children);
  }
}

function getDisplayName(wrappedComponent) {
  return wrappedComponent.displayName || wrappedComponent.name || 'Component'
}
export default modifyPropHoc 