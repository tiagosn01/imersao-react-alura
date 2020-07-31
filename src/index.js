import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Page404 from './pages/Page404'
import RegistrationVideo from './pages/Cadastro/RegistrationVideo'
import RegistrationCategory from './pages/Cadastro/RegistrationCategory';

import {BrowserRouter, Switch, Route} from 'react-router-dom' 


ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route path="/" exact component={App} />
    <Route path="/registration/categoria" component={RegistrationCategory} />
    <Route path="/registration/video" component={RegistrationVideo} />
    <Route  component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

