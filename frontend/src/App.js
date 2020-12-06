import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { Header } from './cmps/header/Header.jsx'

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
