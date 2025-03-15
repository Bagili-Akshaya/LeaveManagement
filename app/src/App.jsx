import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Correct Import
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ApplyLeave from "./Components/ApplyLeave";
import LeaveStatus from "./Components/LeaveStatus";

function App() {
  return (
    <>
      <Navbar />
      <Routes> {/* ✅ Remove Router and Keep Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply-leave" element={<ApplyLeave />} />
        <Route path="/leave-status" element={<LeaveStatus />} />
      </Routes>
    </>
  );
}

export default App;
