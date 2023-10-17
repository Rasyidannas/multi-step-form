import { useState } from "react";
import AdvancedIcon from "../Icons/Advanced";
import ArcadeIcon from "../Icons/Arcade";
import ProIcon from "../Icons/Pro";

const listPlan = [
  { name: "arcade", price: 9, icon: ArcadeIcon, value: "arcade" },
  { name: "advanced", price: 12, icon: AdvancedIcon, value: "advanced" },
  { name: "pro", price: 15, icon: ProIcon, value: "pro" },
];

function SelectPlan(props) {
  const [checkedYearly, setCheckedYearly] = useState(false);
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
                className="peer hidden"
              />
              <label
                htmlFor={item.name}
                className="border border-cool-gray rounded p-4 peer-checked:border-marine-blue peer-checked:bg-alabaster"
              >
                <item.icon />
                <div className="pt-8 text-marine-blue capitalize">
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
      <div className="w-full bg-alabaster p-4 rounded flex justify-center gap-4">
        <label htmlFor="toggle" className="text-marine-blue">
          Monthly
        </label>
        <input
          id="toggle"
          className="hidden"
          type="checkbox"
          checked={checkedYearly}
          onChange={() => setCheckedYearly((prevState) => !prevState)}
        />
        <div className="p-1 bg-marine-blue rounded-2xl w-12 relative">
          <div
            className={`w-4 h-4 bg-white rounded-2xl absolute ${
              checkedYearly === true ? "right-1" : "left-1"
            }`}
          ></div>
        </div>
        <label htmlFor="toggle" className="text-marine-blue">
          Yearly
        </label>
      </div>
    </div>
  );
}

export default SelectPlan;
