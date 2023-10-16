function TextField(props) {
  const inputErr = props.hasEmpty || props.hasError;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <label htmlFor={props.id} className="text-marine-blue">
          {props.textLabel}
        </label>
        <span className="text-strawberry-red font-bold small-text ">
          {props.hasEmpty && props.emptyMessage}
          {props.hasError && props.errorMessage}
        </span>
      </div>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`${
          props.className
        } w-full border border-cool-gray rounded px-4 py-2 ${
          inputErr ? "border-strawberry-red" : ""
        }`}
      />
    </div>
  );
}

export default TextField;
