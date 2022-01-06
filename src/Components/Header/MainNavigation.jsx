import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Store/AuthContext";

import Button from "../UI/Button";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-list"]}>
        <li className={classes["nav-list__item"]}>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>

        {user && <li className={classes["nav-list__item"]}>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            profile
          </NavLink>
        </li>}
        {!user && <li className={classes["nav-list__item"]}>
          <NavLink
            to="/new-blog"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Add Blog
          </NavLink>
        </li>}

        {!user && <li className={classes["nav-list__item"]}>
          <NavLink
            to="/auth/signin"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            signin
          </NavLink>
        </li>}
        {user && (
          <li className={classes["nav-list__item"]}>
            <Button onClick={logOut}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNavigation;
