import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Index'
import Form from '../components/Form/Index'
import Header from '../components/Header/Index';
import Edit from '../components/Edit/Index';

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
          <Form />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router
