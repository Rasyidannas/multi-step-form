import { useReducer } from "react";

const initialRadioState = { value: "" };

const radioStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  }

  if (action.type === "BLUR") {
    return { value: state.value };
  }

  if (action.type === "RESET") {
    return state;
  }

  return state;
};

const useRadio = () => {
  const [radioState, dispatch] = useReducer(
    radioStateReducer,
    initialRadioState
  );

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const radioBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const valueIsValid = radioState.value !== "";
  const valueIsEmpty = !valueIsValid;

  return {
    value: radioState.value,
    isValid: valueIsValid,
    hasEmpty: valueIsEmpty,
    valueChangeHandler,
  };
};

export default useRadio;
