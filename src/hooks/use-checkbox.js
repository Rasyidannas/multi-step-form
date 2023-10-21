import { useReducer } from "react";

const initialCheckboxState = { value: [] };

const checkboxStateReducer = () => {

   //this is must be add value ['a', 'b', 'c']
   if(action.type === 'INPUT') {
      return {value: action.value}
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

  return {
    value: checkboxState.value,
    isValid: valueIsValid,
    hasEmpty: valueIsEmpty,
    valueChangeHandler,
  };
};

export default useCheckbox;
