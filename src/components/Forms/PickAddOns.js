import { useContext, useEffect } from "react";
import FormContext from "../../store/form-context";
import useCheckbox from "../../hooks/use-checkbox";

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
  // this is using context
  const formCtx = useContext(FormContext);

  //store handler
  const addStoreHandler = (adds) => {
    formCtx.addStore(adds);
  };

  //custom hooks for adds
  const {
    value: addValue,
    isValid: addIsValid,
    hasEmpty: addHasEmpty,
    valueChangeHandler: addChangeHandler,
  } = useCheckbox();

  //this is for store data to Context
  useEffect(() => {
    if (addValue.length) {
      //get data for addOnsList
      const getAdd = addValue.map((item) =>
        addOnsList.find((add) => item === add.value)
      );

      addStoreHandler(getAdd);
    }
  }, [addValue]);

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
                className="hidden peer pick-checkbox"
                onChange={addChangeHandler}
              />
              <label
                htmlFor={item.value}
                className="flex items-center gap-8 p-4 border rounded border-cool-gray peer-checked:border-marine-blue peer-checked:bg-alabaster"
              >
                {/* Custom checkbox */}
                <div className="w-6 h-6 border rounded border-cool-gray custom-checkbox"></div>
                <div>
                  <h5 className="btn-text text-marine-blue">{item.name}</h5>
                  <p className="text-cool-gray">{item.desc}</p>
                </div>
                <span className="ml-auto text-purplish-blue">
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
