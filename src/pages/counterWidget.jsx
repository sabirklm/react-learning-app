import React, { Component } from "react";
import { TextField, Button } from "@mui/material";
import "./counterWidget.css";
class CounterWidget extends Component {
  state = {
    email: "",
  };
  render() {
    return (
      <body>
        <div className="login-container">
          <div className="login-heading">
            <h1>{this.state.email}</h1>
            <h1>Welcome back</h1>
            <h2>Welcome back plese enter your details</h2>
          </div>
          <div className="input-field">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{
                margin: "16px",
              }}
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              style={{
                margin: "16px",
              }}
              size="small"
            />
            <Button
              variant="outlined"
              style={{
                padding: "8px 64px",
                borderRadius: "128px",
              }}
              onClick={() => {
                console.log("data");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </body>
    );
  }
}

export default CounterWidget;
