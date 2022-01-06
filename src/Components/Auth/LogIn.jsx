import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import useInput from "../../Hooks/useInput";
import { useAuth } from "../../Store/AuthContext";

import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./AuthForm.module.css";

const LogIn = () => {
  const navigate = useNavigate();
  const { error, setError, signIn } = useAuth();
  const [isError, setIsError] = useState(false);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => {
    const isEmailValid = /\S+@\S+\.\S+/;
    return isEmailValid.test(value);
  });
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => {
    const isPasswordValid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    return isPasswordValid.test(value);
  });

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    try {
      await signIn(enteredEmail, enteredPassword);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
      setIsError(true);
    }

    emailReset();
    passwordReset();
  };

  return (
    <Card className={classes.form}>
      <h1> SignIn </h1>
      <form onSubmit={formSubmissionHandler}>
        <Input
          element="input"
          type="email"
          label="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={enteredEmailHasError ? "invalid" : "from-control"}
          error-text={enteredEmailHasError ? "enter valid email" : undefined}
        />
        <Input
          element="input"
          type="password"
          label="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          className={
            enteredPasswordHasError ? "form-control invalid" : "form-control"
          }
          error-text={enteredPasswordHasError ? "password week" : undefined}
        />
        <div className={classes["form-action"]}>
          <Button disabled={!formIsValid}>LogIn</Button>
        </div>
      </form>
      <p>
        create an account{" "}
        <Button to="/auth/signup" className={classes["singIn-link"]}>
          Sing up
        </Button>
      </p>
      {isError && <p className={classes.error}>{error}</p>}
      <p className={classes["forget-password"]}>Forget password</p>
    </Card>
  );
};

export default LogIn;
