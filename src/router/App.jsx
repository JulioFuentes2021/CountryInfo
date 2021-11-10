import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Index';
import Error from '../components/Error';
import FullCountryInfo from '../components/FullCountryInfo';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/full/:country" component={FullCountryInfo} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default App;
