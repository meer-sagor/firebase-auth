import { useState } from "react";

const useInput = (validatedValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validatedValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => setEnteredValue(event.target.value);
  const blurHandler = () => setIsTouched(true);
  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
