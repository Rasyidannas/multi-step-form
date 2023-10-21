import { useContext } from "react";
import useRadio from "../../hooks/use-radio";
import FormContext from "../../store/form-context";

const paymentList = ["monthly", "yearly"];

function TogglePayment() {
  //this using context
  const formCtx = useContext(FormContext);

  //store handler
  const togglePaymentStoreHandler = (text) => {}
   
  // custom hooks for switch toggle (monthly or yearly)
  const {
    value: switchValue,
    isValid: switchIsValid,
    hasEmpty: switchHasEmpty,
    valueChangeHandler: switchChangeHandler,
  } = useRadio('monthly');
  console.log(switchValue);

  return (
    <div className="flex justify-center w-full gap-4 p-4 rounded bg-alabaster">
      {paymentList.map((item, i) => (
        <div key={i}>
          <label htmlFor={item} className="capitalize text-marine-blue">
            {item}
          </label>
          <input
            type="radio"
            id={item}
            name="switch"
            value={item}
            checked={formCtx.paymentTime === item && true}
            onChange={switchChangeHandler}
          />
        </div>
      ))}
      {/* custom toogle box */}
      <div className="relative w-12 p-1 bg-marine-blue rounded-2xl">
        <div
          className={`w-4 h-4 bg-white rounded-2xl absolute ${
            formCtx.paymentTime === "yearly" ? "right-1" : "left-1"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default TogglePayment;
