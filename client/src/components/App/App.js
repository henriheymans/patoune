import React from "react";
import "./App.scss";

// Import components
import Navbar from "../Navbar/Navbar";
import WalksPage from "../WalksPage/WalksPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WalksPage />
    </div>
  );
}

export default App;
