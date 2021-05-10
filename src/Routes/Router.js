import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Index'
import Header from '../components/Header/Index';
import Edit from '../components/Edit/Index';
import Cadastro from '../components/Cadastrar/Index';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/edit/:id">
          <Edit />
        </Route>
        <Route exact path="/cadastro">
          <Cadastro title="Cadastro" />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router
