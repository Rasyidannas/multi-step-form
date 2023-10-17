const listTitle = ["Your Info", "Select Plan", "Add-ons", "Summary"];

function SideNav(props) {
  return (
    <>
      <ul
        className={`side-nav p-8 flex flex-col gap-6 rounded-2xl w-1/3 h-full ${props.className}`}
      >
        {listTitle.map((title, i) => (
          <li key={i} className="flex gap-4 items-center">
            <div
              className={`p-1 inline-flex justify-center w-8 h-8 border border-white rounded-2xl ${
                props.currForm === i
                  ? "bg-light-blue text-marine-blue"
                  : "text-white"
              }`}
            >
              <span className="font-bold small-text">{i + 1}</span>
            </div>
            <div>
              <span className="text-cool-gray small-text uppercase">
                Step {i + 1}
              </span>
              <p className="uppercase font-bold text-white">{title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default SideNav;
