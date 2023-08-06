import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <BrowserRouter>
    <>
      <Navbar/>
      <Routes>
        <Route Component={Home} path="/" exact/>
        <Route Component={Projects} path="/projects"/>
      </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
