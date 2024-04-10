import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminAnimals } from "./AdminAnimals";
import { CreateAnimal } from "./CreateAnimal";
import { CreateTrainingLog } from "./CreateTrainingLog";
import Login from "./Login";
import Signup from "./Signup";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/admin" component={AdminAnimals} />
      <Route path="/create-animal" component={CreateAnimal} />
      <Route path="/create-training-log" component={CreateTrainingLog} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
