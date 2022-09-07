import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import "./Assets/Fonts/TrueNorth-Regular.otf";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Work />
    </div>
  );
}

export default App;
