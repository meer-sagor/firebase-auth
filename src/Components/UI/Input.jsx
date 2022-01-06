import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <input {...props} />
    ) : (
      <textarea rows={props.rows || 3} {...props} />
    );
  return (
    <div className={`${classes["form-control"]} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      <p className={classes["error-text"]}>{props["error-text"]}</p>
    </div>
  );
};

export default Input;
