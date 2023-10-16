const listTitle = ["Your Info", "Select Plan", "Add-ons", "Summary"];

function SideNav() {
  return (
    <>
      <ul className="side-nav p-8 flex flex-col gap-6 rounded-2xl w-1/3 h-full">
        {listTitle.map((title, i) => (
          <li className="flex gap-4 items-center">
            <div className="p-1 inline-flex justify-center w-8 h-8 border border-white rounded-2xl">
              <span className="text-white font-bold small-text">{i + 1}</span>
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
