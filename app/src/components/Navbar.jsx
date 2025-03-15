import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/">Home</Link> | 
      <Link to="/dashboard"> Dashboard</Link> | 
      <Link to="/login"> Login</Link> | 
      <Link to="/register"> Register</Link> | 
      <Link to="/apply-leave"> Apply Leave</Link> | 
      <Link to="/leave-status"> Leave Status</Link>
    </nav>
  );
}

export default Navbar;
