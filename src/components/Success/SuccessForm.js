import ThankYouIcon from "../Icons/ThankYou";

function SuccessForm() {
  return (
    <div className="mx-auto my-auto text-center flex flex-col items-center gap-4">
      <div className="inline-block">
        <ThankYouIcon />
      </div>
      <div className="flex flex-col items-center">
        <h5 className="text-marine-blue font-bold">Thank you!</h5>
        <p className="text-cool-gray w-4/5">
          Thanks for confirming your subscription! We hope you have fun using
          pur platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </div>
  );
}

export default SuccessForm;
