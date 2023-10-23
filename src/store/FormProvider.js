import { useEffect, useReducer } from "react";
import FormContext from "./form-context";

const defaultFormState = {
  name: "",
  email: "",
  phone: "",
  plan: {},
  add: [],
  paymentTime: "monthly",
  totalPrice: 0,
};

const formReducer = (state, action) => {
  if (action.type === "INFO") {
    return {
      ...state,
      name: action.data.name,
      email: action.data.email,
      phone: action.data.phone,
    };
  }

  if (action.type === "PLAN") {
    return { ...state, plan: action.plan };
  }

  if (action.type === "ADDS") {
    return { ...state, adds: action.adds };
  }

  if (action.type === "PAYMENT") {
    return { ...state, paymentTime: action.text };
  }

  return defaultFormState;
};

const FormProvider = (props) => {
  const [formState, dispatchFormAction] = useReducer(
    formReducer,
    defaultFormState
  );

  const infoStoreHandler = (data) => {
    dispatchFormAction({ type: "INFO", data: data });
  };

  const planStoreHandler = (plan) => {
    dispatchFormAction({ type: "PLAN", plan: plan });
  };

  const addStoreHandler = (adds) => {
    dispatchFormAction({ type: "ADDS", adds: adds });
  };

  const paymentStoreHandler = (text) => {
    dispatchFormAction({ type: "PAYMENT", text: text });
  };

  const formContext = {
    name: formState.name,
    email: formState.email,
    phone: formState.phone,
    plan: formState.plan,
    adds: formState.adds,
    paymentTime: formState.paymentTime,
    totalPrice: formState.totalPrice,
    infoStore: infoStoreHandler,
    planStore: planStoreHandler,
    addStore: addStoreHandler,
    paymentStore: paymentStoreHandler,
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
