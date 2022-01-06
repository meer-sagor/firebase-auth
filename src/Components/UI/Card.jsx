import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  if (props.section) {
    return (
      <section className={`${classes.card} ${props.className}`}>
        {props.children}
      </section>
    );
  }
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
