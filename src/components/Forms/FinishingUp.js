import Button from "../UI/Button";

function FinishingUp(props) {
  return (
    <div className={`flex flex-col gap-8 w-full ${props.className}`}>
      <div>
        <h4 className="font-bold text-marine-blue">Finishing up</h4>
        <p className="text-cool-gray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="bg-alabaster p-6 rounded flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="btn-text text-marine-blue">Arcade(Monthly)</h5>
            <Button
              type="button"
              className="!p-0 text-cool-gray underline decoration-2"
              onClick={props.onChange}
            >
              Change
            </Button>
          </div>
          <p className="font-bold text-marine-blue">$9/mo</p>
        </div>
        <div className="h-[1px] w-full bg-cool-gray opacity-20"></div>
        {/* List services */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-cool-gray">Online service</p>
            <p className="text-marine-blue">+$1/mo</p>
          </div>
          <div className="flex justify-between">
            <p className="text-cool-gray">Larger storage</p>
            <p className="text-marine-blue">+$2/mo</p>
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="flex justify-between items-center px-6">
        <p className="text-cool-gray">Total (per month)</p>
        <h5 className="text-purplish-blue tracking-tight">+$12/mo</h5>
      </div>
    </div>
  );
}

export default FinishingUp;
