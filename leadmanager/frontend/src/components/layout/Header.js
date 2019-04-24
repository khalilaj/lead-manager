import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-primary">
        <h2 className="navbar-brand" href="#">
          Lead Manager
        </h2>
      </nav>
    );
  }
}

export default Header;
