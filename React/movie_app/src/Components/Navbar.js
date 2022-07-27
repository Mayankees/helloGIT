import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1 style={{ color: "black" }}>Movies App</h1>
        </Link>
        <Link to={"/fav"} style={{ textDecoration: "none" }}>
          <h2 style={{ marginLeft: "2rem", color:"black" }}>Favourites</h2>
        </Link>
      </div>
    );
  }
}
