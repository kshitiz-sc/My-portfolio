import "./App.css";
import Home from "./Components/Home";
import {Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import { AnimatePresence } from "framer-motion";
function App() {
  const currentlocation = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={currentlocation} key={currentlocation.key}>
          <Route Component={Home} path="/" exact />
          <Route Component={Projects} path="/projects" />
          <Route Component={About} path="/about" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
