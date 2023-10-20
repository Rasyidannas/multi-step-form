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
    <Card className="app rounded-3xl mx-auto h-screen w-4/5 flex">
      <SideNav className="flex-none" currForm={formActive} />
      <form className="mt-8 mb-4 mx-12 w-8/12 flex flex-col items-end justify-between flex-1 overflow-hidden">
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
        <div className="w-full flex justify-between">
          <Button
            type="button"
            className="text-cool-gray"
            onClick={prevHandler}
          >
            Go Back
          </Button>
          {formActive !== 3 && (
            <Button
              type="button"
              className="bg-marine-blue text-white"
              onClick={nextHandler}
            >
              Next Step
            </Button>
          )}
          {formActive === 3 && (
            <Button type="submit" className="bg-marine-blue text-white">
              Confirm
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
}
