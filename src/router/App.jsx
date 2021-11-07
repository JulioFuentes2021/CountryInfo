import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Index';
import FullCountryInfo from '../components/FullCountryInfo';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/full/:country" component={FullCountryInfo} />
    </Switch>
  </Router>
);

export default App;
