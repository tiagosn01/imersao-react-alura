import React from 'react';

import {Link} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
// import { Container } from './styles';

function RegistrationVideo() {
  return (
   <PageDefault>
     <h1>Cadastro de Vídeo</h1>

     <Link to="/registration/categoria">
       Cadastro de categoria
     </Link>
   </PageDefault>
  );
}

export default RegistrationVideo;