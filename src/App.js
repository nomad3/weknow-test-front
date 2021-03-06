import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyForm from "./components/set-date.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">  
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Topic's count App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Most Discussed Topics</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={MyForm} />
        </div>
      </Router>
    );
  }
}
export default App;