import React from 'react';

import {Link} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
// import { Container } from './styles';

function RegistrationCategory() {
  return (
   <PageDefault>
     <h1>Cadastro de Categoria</h1>

     <Link to="/">
       Ir para Home
     </Link>
   </PageDefault>
  );
}

export default RegistrationCategory;