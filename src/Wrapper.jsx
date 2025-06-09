import React from 'react'
//wrapper is a component which takes a component as a prop and returns a component
const Wrapper = (props) => {
  return props.App;
}

export default Wrapper