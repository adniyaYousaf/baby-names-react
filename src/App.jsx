import names from "../data/babyNamesData.json";

function App() {
  return (
    <div className="container">
      {names.map((child) => (
        <button className="names"
          style={{
            background: child.sex === "f" ? "magenta" : "darkgreen",
          }}
          key={child.id}
        >
          {child.name}
        </button>
      ))}
    </div>
  );
}

export default App;
