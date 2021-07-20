import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CompCreate from "./components/CompCreate";
import CompEdit from "./components/CompEdit";
import CompIndex from "./components/ListPerson";

export default function App (){
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/list-person"} className="nav-link">
                  List Person
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
        <br />
        <h2>Dashboard</h2> <br />
        <Switch>
          <Route exact path="/create" component={CompCreate} />
          <Route path="/edit/:id" component={CompEdit} />
          <Route path="/list-person" component={CompIndex} />
        </Switch>
      </div>
    </Router>
  );
}


