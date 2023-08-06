import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
    <>
      <Navbar/>
      <Routes>
        <Route Component={Home} path="/" exact/>
        <Route Component={Projects} path="/projects"/>
        <Route Component={About} path="/about"/>
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
