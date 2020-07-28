import React from 'react';

import { Link } from 'react-router-dom';

 import { Container } from './styles'; 

const Page404 = () => {
  return (
    <Container>
      <h1>Desculpe, essa página não existe.</h1>
      <Link to="/">Clique aqui para voltar para pagina inicial.</Link>
    </Container>
  )
}

export default Page404;