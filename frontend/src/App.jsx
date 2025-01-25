import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";
function App() {
  const location = useLocation();
  const noNavbar =
    location.pathname === "/register" ||
    location.pathname === "/" ||
    location.pathname.includes("password");
  return (
    <>
      {noNavbar ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/request/password_reset"
            element={<PasswordResetRequest />}
          />
          <Route path="/password_reset/:token" element={<PasswordReset />} />
        </Routes>
      ) : (
        <NavBar
          content={
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Route>
            </Routes>
          }
        />
      )}
    </>
  );
}
export default App;
