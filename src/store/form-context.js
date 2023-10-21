import React from "react";

const FormContext = React.createContext({
  name: "",
  email: "",
  phone: "",
  plan: "",
  adds: [],
  paymentTime: "",
  totalPrice: 0,
  infoStore: (data) => {},
  planStore: (plan) => {},
  addsStore: (adds) => {},
  paymentTimeStore: (text) => {}
});

export default FormContext;
