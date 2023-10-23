const listTitle = ["Your Info", "Select Plan", "Add-ons", "Summary"];

function SideNav(props) {
  return (
    <>
      <ul
        className={`absolute md:relative top-0 left-0 side-nav p-8 flex flex-row md:flex-col justify-center md:justify-start gap-6 rounded-none md:rounded-2xl h-1/5 md:h-full ${props.className}`}
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
            <div className="hidden md:block">
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
