import { useContext } from "react";
import Button from "../UI/Button";
import FormContext from "../../store/form-context";

function FinishingUp(props) {
  // this is using Context
  const formCtx = useContext(FormContext);

  //yearly payment
  const yearlyPaymentTime = formCtx.paymentTime === "yearly";

  //total price logic
  let planPriceMonthly;
  let planPriceYearly;
  let addsPriceMonthly;
  let addsPriceYearly;

  //check plan and add in context not empty
  if (formCtx.plan && formCtx.adds.length) {
    //set planPrice
    planPriceMonthly = formCtx.plan.priceMonthly;
    planPriceYearly = formCtx.plan.priceYearly;

    //set addsPrice
    if (formCtx.adds.length > 1) {
      addsPriceMonthly = formCtx.adds.reduce(
        (acc, curr) => acc.priceMonthly + curr.priceMonthly
      );
      addsPriceYearly = formCtx.adds.reduce(
        (acc, curr) => acc.priceYearly + curr.priceYearly
      );
    } else {
      addsPriceMonthly = formCtx.adds[0].priceMonthly;
      addsPriceYearly = formCtx.adds[0].priceYearly;
    }
  }

  const planPrice = [planPriceMonthly, planPriceYearly];
  const addsPrice = [addsPriceMonthly, addsPriceYearly];
  const totalPrice = [planPrice[0] + addsPrice[0], planPrice[1] + addsPrice[1]]
  // console.log(planPrice, addsPrice, totalPrice);

  return (
    <div className={`flex flex-col gap-8 w-full ${props.className}`}>
      <div>
        <h4 className="font-bold text-marine-blue">Finishing up</h4>
        <p className="text-cool-gray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="flex flex-col gap-6 p-6 rounded bg-alabaster">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="capitalize btn-text text-marine-blue">{`${formCtx.plan.name} (${formCtx.paymentTime})`}</h5>
            <Button
              type="button"
              className="!p-0 text-cool-gray underline decoration-2"
              onClick={props.onChange}
            >
              Change
            </Button>
          </div>
          <p className="font-bold text-marine-blue">
            $
            {yearlyPaymentTime
              ? `${formCtx.plan.priceYearly}/yr`
              : `${formCtx.plan.priceMonthly}/mo`}
          </p>
        </div>
        <div className="h-[1px] w-full bg-cool-gray opacity-20"></div>
        {/* List services */}
        <div className="flex flex-col gap-4">
          {formCtx.adds.map((add, i) => (
            <div key={i} className="flex justify-between">
              <p className="text-cool-gray">{add.name}</p>
              <p className="text-marine-blue">
                +$
                {yearlyPaymentTime
                  ? `${add.priceYearly}/yr`
                  : `${add.priceMonthly}/mo`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Total Price */}
      <div className="flex items-center justify-between px-6">
        <p className="text-cool-gray">
          Total (per {yearlyPaymentTime ? "yearly" : "monthly"})
        </p>
        <h5 className="tracking-tight text-purplish-blue">+${yearlyPaymentTime ? `${totalPrice[1]}/yr` : `${totalPrice[0]}/mo`}</h5>
      </div>
    </div>
  );
}

export default FinishingUp;
