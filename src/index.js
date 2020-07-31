import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import RegistrationVideo from './pages/Cadastro/RegistrationVideo';
import RegistrationCategory from './pages/Cadastro/RegistrationCategory';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/registration/categoria" component={RegistrationCategory} />
      <Route path="/registration/video" component={RegistrationVideo} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
