const addOnsList = [
  {
    name: "Online service",
    desc: "Access to multiplayer games",
    value: "online-serivce",
    price: 1,
  },
  {
    name: "Large storage",
    desc: "Extra 1TB of cloud save",
    value: "large-storage",
    price: 2,
  },
  {
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    value: "customizable-profile",
    price: 2,
  },
];

function PickAddOns(props) {
  return (
    <div className={`flex flex-col gap-8 w-full ${props.className}`}>
      <div>
        <h4 className="font-bold text-marine-blue">Pick add-ons</h4>
        <p className="text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          {addOnsList.map((item, i) => (
            <li key={i}>
              <input
                type="checkbox"
                name="adds"
                value={item.value}
                id={item.value}
                className="peer pick-checkbox hidden"
              />
              <label
                htmlFor={item.value}
                className="flex items-center gap-8 border border-cool-gray rounded p-4 peer-checked:border-marine-blue peer-checked:bg-alabaster"
              >
                {/* Custom checkbox */}
                <div className="w-6 h-6 rounded border border-cool-gray custom-checkbox"></div>
                <div>
                  <h5 className="btn-text text-marine-blue">{item.name}</h5>
                  <p className="text-cool-gray">{item.desc}</p>
                </div>
                <span className="text-purplish-blue ml-auto">
                  ${item.price}/mo
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PickAddOns;
