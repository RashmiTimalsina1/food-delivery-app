import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "30px" }}>
          <h2>Welcome to Admin Panel</h2>
        </div>
      </div>
    </>
  );
}

export default App;