import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "./Assets/Fonts/TrueNorth-Regular.otf";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default App;
