import React from 'react';

import Logo from '../../assets/logo.png';
import Button from '../Button'

import {Container} from './styles'

const Menu = () => {
  return (
    <Container>
      <a href="/">
        <img src={Logo} alt="TSFLIX"/>
      </a>

      <Button href={"/"}>
        Novo vídeo
      </Button>
      
    </Container>
  )
}

export default Menu;