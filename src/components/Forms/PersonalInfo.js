import { useContext, useEffect } from "react";
import FormContext from "../../store/form-context";

import useInput from "../../hooks/use-input";
import TextField from "../UI/TextField";

function PersonalInfo(props) {
  //this is context
  const formCtx = useContext(FormContext);

  //store handler
  const personalInfoStoreHandler = (data) => {
    formCtx.infoStore(data);
  };

  //validation for input
  const isName = (value) => value.match(/^[A-Za-z\s]+$/);
  const isEmail = (value) =>
    value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  const isPhone = (value) => value.match(/^[+]\d+$/) && value.length >= 10;

  //custom hooks for input
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasEmpty: nameHasEmpty,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isName);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasEmpty: emailHasEmpty,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasEmpty: phoneHasEmpty,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput(isPhone);

  //this for store data to Context
  useEffect(() => {
    if (nameIsValid && emailIsValid && phoneIsValid) {
      const data = {
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
      };

      personalInfoStoreHandler(data);
    }
  }, [nameIsValid, emailIsValid, phoneIsValid]);

  return (
    <div className={`flex flex-col gap-8 w-full ${props.className}`}>
      <div>
        <h4 className="font-bold text-marine-blue">Personal info</h4>
        <p className="text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      {/* form personal info */}
      <div className="flex flex-col gap-4">
        <TextField
          id="name"
          textLabel="Name"
          type="text"
          value={nameValue}
          placeholder="e.g.Stephen King"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          hasError={nameHasError}
          hasEmpty={nameHasEmpty}
          emptyMessage="This field is required"
          errorMessage="Must be valid name"
        />

        <TextField
          id="email"
          textLabel="Email"
          type="text"
          value={emailValue}
          placeholder="e.g.stephenking@lorem.com"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
          hasEmpty={emailHasEmpty}
          emptyMessage="This field is required"
          errorMessage="Must be valid email address"
        />

        <TextField
          id="phone"
          textLabel="Phone Number"
          type="text"
          value={phoneValue}
          placeholder="e.g. +1 234 567 890"
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
          hasError={phoneHasError}
          hasEmpty={phoneHasEmpty}
          emptyMessage="This field is required"
          errorMessage="Must be valid phone number"
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
