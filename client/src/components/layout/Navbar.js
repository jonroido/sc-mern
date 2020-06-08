import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from './stack.png';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
          <img className="stacklogo" src={logo} alt="Logo" />
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <b style={{ color: "red"}}>STACK</b> <b style={{ color: "gray"}}>CLASSROOM</b> 
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
