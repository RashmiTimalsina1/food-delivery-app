import { useState } from "react";
import Home from "./pages/Home";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <div className="app">
      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          setToken={setToken}
        />
      )}

      <Home
        setShowLogin={setShowLogin}
        token={token}
      />
    </div>
  );
}

export default App;