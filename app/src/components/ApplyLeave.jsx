import React, { useState } from "react";
import axios from "axios";

function ApplyLeave() {
  const [type, setType] = useState("");
  const [days, setDays] = useState("");

  const handleApply = async () => {
    try {
      await axios.post("http://localhost:5003/api/apply-leave", { user_id: 1, type, days });
      alert("Leave Applied Successfully");
    } catch (error) {
      alert("Error applying leave!");
    }
  };

  return (
    <div>
      <h2>Apply for Leave</h2>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="">Select Leave Type</option>
        <option value="casual">Casual</option>
        <option value="medical">Medical</option>
      </select>
      <input type="number" placeholder="No of days" onChange={(e) => setDays(e.target.value)} />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
}

export default ApplyLeave;
