import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <h1>Меню</h1>
      <ul>
        <li>
          <Link to="/menu">Меню</Link>
        </li>
        <li>
          <Link to="/content">Контент</Link>
        </li>
      </ul>
    </div>
  );
}

function Content() {
  return (
    <div>
      <h1>Контент</h1>
      <p>Это страница с контентом</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/content" component={Content} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
