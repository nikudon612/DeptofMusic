import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="App">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar />
      <Work />
      <About />
      <Contact />
      {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default App;
