import React from "react";
import { render } from "react-dom";
import Form from "./form";
import "./styles.css";

const App = () => (
  <div className="pageWrapper">
    <div className="intro">
      <h1>Welcome</h1>
      <p>Please tell us a bit about yourself to get started</p>
    </div>
    <Form />
  </div>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
