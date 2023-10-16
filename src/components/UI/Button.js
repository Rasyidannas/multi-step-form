function Button(props) {
  return (
    <button
      className={`${props.className} px-4 py-2 rounded`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default Button;
