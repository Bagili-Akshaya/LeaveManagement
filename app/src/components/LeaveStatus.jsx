import React, { useEffect, useState } from "react";
import axios from "axios";

function LeaveStatus() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5003/api/leaves")
      .then(response => setLeaves(response.data))
      .catch(error => console.error("Error fetching leaves:", error));
  }, []);

  return (
    <div>
      <h2>Leave Status</h2>
      <ul>
        {leaves.map(leave => (
          <li key={leave.id}>
            {leave.type} - {leave.days} days - {leave.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaveStatus;
