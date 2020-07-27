import React from 'react';

 import { Container } from './styles';

function Button(props) {
  console.log(props)
  return (
    <Container>
      <a href={props.href}>
       {props.children}
      </a> 
    </Container>
  )
}

export default Button;