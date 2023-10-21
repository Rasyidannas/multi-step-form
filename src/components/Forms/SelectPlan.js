import { useContext, useState } from "react";
import useRadio from "../../hooks/use-radio";
import FormContext from "../../store/form-context";

import AdvancedIcon from "../Icons/Advanced";
import ArcadeIcon from "../Icons/Arcade";
import ProIcon from "../Icons/Pro";
import TogglePayment from "./TogglePayment";

const listPlan = [
  { name: "arcade", price: 9, icon: ArcadeIcon, value: "arcade" },
  { name: "advanced", price: 12, icon: AdvancedIcon, value: "advanced" },
  { name: "pro", price: 15, icon: ProIcon, value: "pro" },
];

function SelectPlan(props) {
  // custom hooks for plans
  const {
    value: planValue,
    isValid: planIsValid,
    hasEmpty: planHasEmpty,
    valueChangeHandler: planChangeHandler,
  } = useRadio();

  //this is context
  const formCtx = useContext(FormContext);

  //store handler
  const planStoreHandler = (data) => {
    // formCtx.onStore(data)
  };

  return (
    <div className={`flex flex-col gap-8 w-full ${props.className}`}>
      <div>
        <h4 className="font-bold text-marine-blue">Select your plan</h4>
        <p className="text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex justify-between">
        {listPlan.map((item, i) => {
          return (
            <div key={i} className="flex flex-col w-[30%]">
              <input
                type="radio"
                id={item.name}
                name="plan"
                value={item.value}
                className="hidden peer"
                onChange={planChangeHandler}
              />
              <label
                htmlFor={item.name}
                className="p-4 border rounded border-cool-gray peer-checked:border-marine-blue peer-checked:bg-alabaster"
              >
                <item.icon />
                <div className="pt-8 capitalize text-marine-blue">
                  {item.name}
                </div>
                <div className="small-text text-cool-gray">
                  ${item.price}/mo
                </div>
              </label>
            </div>
          );
        })}
      </div>

      {/* Switch toggle Montly or Yearly */}
      <TogglePayment />
    </div>
  );
}

export default SelectPlan;
