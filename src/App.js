import { useState } from "react";
import FormProvider from "./store/FormProvider";

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
  //validation for each form component
  const [infoValid, setInfoValid] = useState(false);
  const [planValid, setPlanValid] = useState(false);
  const [addValid, setAddValid] = useState(false);

  //confimation
  const [confirm, setConfirm] = useState(false);

  const [formActive, setFormActive] = useState(0);

  //handler for next slide form
  const nextHandler = () => {
    return setFormActive((prevState) => (prevState < 3 ? ++prevState : 0));
  };
  //handler for previous slide form
  const prevHandler = () => {
    return setFormActive((prevState) => (prevState > 0 ? --prevState : 3));
  };

  //handler for submit
  const submitHandler = (event) => {
    event.preventDefault();

    setConfirm(true);
  };

  return (
    <FormProvider>
      <Card className="app flex flex-col md:flex-row w-11/12 md:w-4/5 md:h-screen mx-auto rounded-3xl">
        <SideNav className="flex-none w-full md:w-1/3" currForm={formActive} />
        {!confirm && (
          <form
            className="flex flex-col items-end md:justify-between flex-1 w-full md:w-8/12 mx-auto md:mx-12 mt-20 md:mt-8 mb-4 overflow-hidden"
            onSubmit={submitHandler}
          >
            <div
              className="flex w-full transition-all duration-300"
              style={{ transform: `translateX(-${formActive * 100}%)` }}
            >
              <PersonalInfo
                className="flex-none p-8 md:p-2 bg-white md:bg-transparent rounded-xl"
                formIsValid={(valid) => setInfoValid(valid)}
              />
              <SelectPlan
                className="flex-none p-8 md:p-2 bg-white md:bg-transparent rounded-xl"
                formIsValid={(valid) => setPlanValid(valid)}
              />
              <PickAddOns
                className="flex-none p-8 md:p-2 bg-white md:bg-transparent rounded-xl"
                formIsValid={(valid) => setAddValid(valid)}
              />
              <FinishingUp
                className="flex-none p-8 md:p-2 bg-white md:bg-transparent rounded-xl"
                onChange={() => setFormActive(1)}
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-between w-full absolute md:relative bottom-0 left-0 p-10 md:p-0 bg-white md:bg-transparent">
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
                  disabled={
                    (formActive === 0 && !infoValid) ||
                    (formActive === 1 && !planValid) ||
                    (formActive === 2 && !addValid)
                  }
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
        )}

        {confirm && (
          <SuccessForm className=" relative w-full md:w-8/12 p-8 md:p-0 rounded-xl bg-white md:bg-transparent" />
        )}
      </Card>
    </FormProvider>
  );
}
