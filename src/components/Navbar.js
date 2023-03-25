import React, { Component } from "react";
import { Link } from "react-router-dom";

export class navbar extends Component {
  handleClick = (clicked_id)=>{

  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" id="home" to="/" onClick={this.handleClick(this.id)}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="business" to="/business" onClick={this.handleClick(this.id)}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="entertainment" to="/entertainment" onClick={this.handleClick(this.id)}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="health" to="/health" onClick={this.handleClick(this.id)}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="science" to="/science" onClick={this.handleClick(this.id)}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="sports" to="/sports" onClick={this.handleClick(this.id)}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="technology" to="/technology" onClick={this.handleClick(this.id)}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
