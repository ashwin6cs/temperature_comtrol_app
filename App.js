import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({ count: 0, color: "" });

  if (value.count > 10) {
    setValue.color = "red";
  } else {
    setValue.color = "lightblue";
  }

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "aliceblue",
          margin: "auto",
          marginTop: 100,
          width: 200,
          height: 200,
          border: "3px solid green",
          padding: 10,
        }}
      >
        <div
          style={{
            background: setValue.color,
            borderRadius: 50,
            width: 100,
            height: 100,
            textAlign: "center",
            marginLeft: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          {value.count}°C
        </div>
        <div style={{ marginTop: 20 }}>
          <button
            style={{ borderRadius: 80, margin: 10, padding: 10 }}
            onClick={() => {
              setValue({ count: value.count + 1 });
            }}
          >
            +
          </button>
          <button
            style={{ borderRadius: 50, margin: 10, padding: 10 }}
            onClick={() => {
              setValue({ count: value.count - 1 });
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
