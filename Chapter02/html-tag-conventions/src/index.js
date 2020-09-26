import React from "react";
import { render } from "react-dom";
import "./index.css";
import CommandIcon from "./img/command-icon.svg";

render(
  <button title="My Button" foo="bar" className="button">
    <div className="button-content">
      <div className="button-icon">
        <img src={CommandIcon} alt="Command key icon" />
      </div>
      <p className="button-text">command</p>
    </div>
  </button>,
  document.getElementById("root")
);

/* render(<Button />, document.getElementById("root")); */
