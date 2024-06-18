import React, { useState } from "react";

const TimerForm = ({ addTimer }) => {
  const [seconds, setSeconds] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seconds > 0) {
      addTimer(parseFloat(seconds));
      setSeconds("");
    }
  };

  return (
    <div>
      <h2>New Timer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          required
        />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TimerForm;
