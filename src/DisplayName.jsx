 function DisplayName(props) {
  return (
    <>
      <button
        className="names"
        style={{
          background: props.sex === "f" ? "magenta" : "darkgreen",
        }}
        key={props.id}
      >
        {props.name}
      </button>
    </>
  );
}

export default DisplayName
