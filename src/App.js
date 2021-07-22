import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CompCreate from "./components/CompCreate";
import CompEdit from "./components/CompEdit";
import CompIndex from "./components/ListPerson";
import CompLogin from "./components/CompLogin";
import { actRemoveUserInfo } from "./store/user/actions";

export default function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("currentUse123r", currentUser);
  let history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //handle Logout
  function handleLogout() {
    dispatch(actRemoveUserInfo());
    alert("Are you sure you want to sign out ?");
    history.push("/log-in");
  }
  return (
    <Router>
      <div>
        <div className="container">
          <div className="inner___header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light inner">
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
                  <li className="nav-item">
                    <Link to={"/log-in"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="dr-p">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle caret className="dr-name">
                        <span>Wellcome &nbsp;&nbsp;&nbsp;</span>
                        <strong> {currentUser?.email}</strong>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>My Profile</DropdownItem>
                        <DropdownItem>Name: {currentUser?.name}</DropdownItem>
                        <DropdownItem>
                          Gender: {currentUser?.gender}
                        </DropdownItem>

                        <DropdownItem>
                          <Link
                            to={"/log-in"}
                            className="nav-link"
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </nav>{" "}
          </div>
          <br />
          <Switch>
            <Route exact path="/create" component={CompCreate} />
            <Route path="/edit/:id" component={CompEdit} />
            <Route path="/list-person" component={CompIndex} />
            <Route path="/log-in" component={CompLogin} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
