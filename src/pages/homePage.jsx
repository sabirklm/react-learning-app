import React, { Component } from "react";
//import logo from "./nasa_logo.png";
import "./homePage.css";
import CounterWidget from "./counterWidget";
//import NewsCard from "./newsCard";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="home-body">
        <div>
          <CounterWidget></CounterWidget>
        </div>
      </div>
    );
  }
}

export default HomePage;
