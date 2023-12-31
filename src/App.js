import { useState } from "react";

import "./styles.css";
import SideNav from "./components/Layout/SideNav";
import Card from "./components/UI/Card";
import PersonalInfo from "./components/Forms/PersonalInfo";
import SelectPlan from "./components/Forms/SelectPlan";
import PickAddOns from "./components/Forms/PickAddOns";
import FinishingUp from "./components/Forms/FinishingUp";
import SuccessForm from "./components/Success/SuccessForm";
import Button from "./components/UI/Button";

export default function App() {
  const [formActive, setFormActive] = useState(0);

  //handler for next slide form
  const nextHandler = () => {
    return setFormActive((prevState) => (prevState < 3 ? ++prevState : 0));
  };
  //handler for previous slide form
  const prevHandler = () => {
    return setFormActive((prevState) => (prevState > 0 ? --prevState : 3));
  };

  return (
    <Card className="flex w-4/5 h-screen mx-auto app rounded-3xl">
      <SideNav className="flex-none" currForm={formActive} />
      <form className="flex flex-col items-end justify-between flex-1 w-8/12 mx-12 mt-8 mb-4 overflow-hidden">
        <div
          className="flex w-full transition-all duration-300"
          style={{ transform: `translateX(-${formActive * 100}%)` }}
        >
          <PersonalInfo className="flex-none p-2" />
          <SelectPlan className="flex-none p-2" />
          <PickAddOns className="flex-none p-2" />
          <FinishingUp
            className="flex-none p-2"
            onChange={() => setFormActive(1)}
          />
        </div>
        {/* <SuccessForm /> */}
        <div className="flex justify-between w-full">
          {formActive !== 0 && (
            <Button
              type="button"
              className="text-cool-gray"
              onClick={prevHandler}
            >
              Go Back
            </Button>
          )}
          {formActive !== 3 && (
            <Button
              type="button"
              className="ml-auto text-white bg-marine-blue"
              onClick={nextHandler}
            >
              Next Step
            </Button>
          )}
          {formActive === 3 && (
            <Button type="submit" className="text-white bg-marine-blue">
              Confirm
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}
