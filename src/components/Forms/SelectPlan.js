import { useContext, useEffect } from "react";
import useRadio from "../../hooks/use-radio";
import FormContext from "../../store/form-context";

import AdvancedIcon from "../Icons/Advanced";
import ArcadeIcon from "../Icons/Arcade";
import ProIcon from "../Icons/Pro";
import TogglePayment from "./TogglePayment";

const listPlan = [
  { name: "arcade", priceMonthly: 9, priceYearly: 90, icon: ArcadeIcon, value: "arcade" },
  { name: "advanced", priceMonthly: 12, priceYearly: 120, icon: AdvancedIcon, value: "advanced" },
  { name: "pro", priceMonthly: 15, priceYearly: 150, icon: ProIcon, value: "pro" },
];

function SelectPlan(props) {
  //this is context
  const formCtx = useContext(FormContext);

  //store handler
  const planStoreHandler = (data) => {
    formCtx.planStore(data);
  };

  //yearly payment
  const yearlyPaymentTime = formCtx.paymentTime === "yearly"

  // custom hooks for plans
  const {
    value: planValue,
    isValid: planIsValid,
    hasEmpty: planHasEmpty,
    valueChangeHandler: planChangeHandler,
  } = useRadio();

  //this for store data to Context
  useEffect(() => {
    if (planValue.length !== 0) {
      //this is for get data from listPlan
      const getPlan = listPlan.find((item) => item.name === planValue);
      const getPriceMonthly = getPlan[0].priceMonthly;
      const getPriceYearly = getPlan[0].priceYearly;
      
      const data = {
        plan: planValue,
        priceMonthly: getPriceMonthly,
        priceYearly: getPriceYearly,
      };

      planStoreHandler(data);
    }
  }, [planValue]);

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
                  ${yearlyPaymentTime ? `${item.priceYearly}/yr` : `${item.priceMonthly}/mo`}
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
