import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import TodoContainer from "./components/TodoContainer";
import Impressum from "./components/pages/Impressum";
import Contact from "./components/pages/Contact";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={TodoContainer} />
          <Route path="/impressum" component={Impressum} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
