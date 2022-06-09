import { useState } from "react";
import "./App.css";
import MainMint from "./MainMint";
import NavBar from "./NavBar";

function App() {
  const [acc, setAcc] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar acc={acc} setAcc={setAcc} />
        <MainMint acc={acc} setAcc={setAcc} />
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
