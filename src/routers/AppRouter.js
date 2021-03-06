import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Page1 from '../components/Page1/Page1';
import Header from '../components/Header/Header';
import Page2 from '../components/Page2/Page2';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Page1} exact />
          <Route path="/page1" component={Page1} exact />
          <Route path="/page2" component={Page2} exact />
          
        </Switch>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;
  