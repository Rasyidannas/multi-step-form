import React from "react";

const FormContext = React.createContext({
  plan: "",
  adds: [],
  paymentTime: "",
  totalPrice: 0,
  onStore: (data) => {}
});

export default FormContext;
