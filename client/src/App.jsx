import { useState } from "react";
import Home from "./pages/Home";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Home setShowLogin={setShowLogin} />
    </div>
  );
}

export default App;