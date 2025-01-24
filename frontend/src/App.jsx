import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const noNavbar =
    location.pathname === "/register" || location.pathname === "/";
  return (
    <>
      {noNavbar ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <NavBar
          content={
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          }
        />
      )}
    </>
  );
}
export default App;
