import React from 'react';

import { Container } from './styles';;

function Button(props) {
  console.log(props)
  return (
 
      <Container to={props.to}>
       {props.children}
      </Container> 

  )
}

export default Button;