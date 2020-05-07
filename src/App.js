import React from "react";
import { Route, withRouter, Link } from "react-router-dom";
import Hooks from "./components/Hooks";
import HooksForms from "./components/HooksForms";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/hooksforms">Forms Using Hooks</Link>
        </li>
      </ul>
      <Route
        exact
        path='/hooks'
        component={Hooks}>
      </Route>
      <Route
        exact 
        path='/hooksForms'
        component={HooksForms}>
      </Route>
    </div>
  );
}

export default withRouter(App);
