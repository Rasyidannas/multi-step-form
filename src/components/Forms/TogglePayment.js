import { useContext, useEffect } from "react";
import useRadio from "../../hooks/use-radio";
import FormContext from "../../store/form-context";

function TogglePayment() {
  //this using context
  const formCtx = useContext(FormContext);

  //store handler
  const togglePaymentStoreHandler = (text) => {
    formCtx.paymentStore(text);
  };

  // custom hooks for switch toggle (monthly or yearly)
  const {
    value: switchValue,
    isValid: switchIsValid,
    hasEmpty: switchHasEmpty,
    valueChangeHandler: switchChangeHandler,
  } = useRadio();

  //this for store data to Context
  useEffect(() => {
    if(switchIsValid) {
      togglePaymentStoreHandler(switchValue);
    }
  }, [switchValue])

  return (
    <div className="flex justify-center w-full gap-4 p-4 rounded bg-alabaster">
      {/* Monthly */}
      <div>
        <label htmlFor="monthly" className="capitalize text-marine-blue cursor-pointer">
          Monthly
        </label>
        <input
          type="radio"
          id="monthly"
          name="switch"
          value="monthly"
          checked={switchHasEmpty || switchValue === "monthly"}
          onChange={switchChangeHandler}
          className="hidden"
        />
      </div>
      {/* custom toogle box */}
      <div className="relative w-12 p-1 bg-marine-blue rounded-2xl">
        <div
          className={`w-4 h-4 bg-white rounded-2xl absolute ${
            formCtx.paymentTime === "yearly" || switchValue === "yearly"
              ? "right-1"
              : "left-1"
          }`}
        ></div>
      </div>
      {/* Yearly */}
      <div>
        <label htmlFor="yearly" className="capitalize text-marine-blue cursor-pointer">
          Yearly
        </label>
        <input
          type="radio"
          id="yearly"
          name="switch"
          value="yearly"
          onChange={switchChangeHandler}
          className="hidden"
        />
      </div>
    </div>
  );
}

export default TogglePayment;
