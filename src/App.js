import React, { useState } from "react";
import TimerList from "./components/TimerList";
import TimerForm from "./components/TimerForm";
import "./App.css";

function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (seconds) => {
    const newTimer = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      remainingTime: seconds,
    };
    setTimers([...timers, newTimer]);
  };

  const removeTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="App">
      <div className="left">
        <TimerList
          timers={timers}
          removeTimer={removeTimer}
          setTimers={setTimers}
        />
      </div>
      <div className="right">
        <TimerForm addTimer={addTimer} />
      </div>
    </div>
  );
}

export default App;
