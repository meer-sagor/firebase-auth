import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = (props) => {
  if (props.to) {
    return (
      <Link to={props.to} className={`${classes.link}  ${props.className}`}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
