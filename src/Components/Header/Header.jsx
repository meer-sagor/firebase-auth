import React from "react";
import { Link } from "react-router-dom";
import MainNavigation from "./MainNavigation";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${classes.header} ${classes["header-bg"]}`}>
      <div className={classes["brand-logo"]}>
        <Link to="/">
          <h1>Brand Logo</h1>
        </Link>
      </div>
      <MainNavigation />
    </header>
  );
};

export default Header;
