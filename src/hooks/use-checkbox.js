import { useReducer } from "react";

const initialCheckboxState = { value: [] };

const checkboxStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    const existingItem = state.value.find((item) => item === action.value)

    //this is for check if items exist
    if(existingItem) {
      return {value: state.value.filter((item) => item !== action.value)}
    }

    return { value: state.value.concat(action.value) };
  }

  if(action.type === "BLUR") {
    return { value: state.value };
  }

  if(action.type === "RESET") {
    return state;
  }
};

const useCheckbox = () => {
  const [checkboxState, dispatch] = useReducer(
    checkboxStateReducer,
    initialCheckboxState
  );

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const checkboxBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const valueIsValid = checkboxState.value.length !== 0;
  const valueIsEmpty = !valueIsValid;

  return {
    value: checkboxState.value,
    isValid: valueIsValid,
    hasEmpty: valueIsEmpty,
    valueChangeHandler,
  };
};

export default useCheckbox;
