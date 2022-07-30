import React, { Component } from "react";
import logo from "./nasa_logo.png";
import "./homePage.css";
class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="home-body">
        <div className="nav">
          <img src={logo} alt="Logo" className="nasa-logo" />
          <h1>MARS</h1>
        </div>
        <iframe
          className="bording-pass"
          src="https://mars.nasa.gov/layout/embed/send-your-name/future/certificate/?cn=769077813259"
        
        ></iframe>
      </div>
    );
  }
}

export default HomePage;
