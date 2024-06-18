import React, { useEffect } from "react";

const TimerList = ({ timers, removeTimer, setTimers }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((timers) =>
        timers
          .map((timer) => {
            if (timer.remainingTime > 0.01) {
              return { ...timer, remainingTime: timer.remainingTime - 0.01 };
            } else {
              return { ...timer, remainingTime: 0 };
            }
          })
          .filter((timer) => timer.remainingTime > 0)
      );
    }, 10);

    return () => clearInterval(interval);
  }, [setTimers]);

  return (
    <div>
      <ul>
        {timers.map((timer) => (
          <li key={timer.id}>
            <div className="timer-container">
              <div>
                <h2>{timer.remainingTime.toFixed(2).replace(".", ",")}</h2>
                <div>{timer.createdAt}</div>
              </div>
              <div>
                <button
                  className="delete-btn"
                  onClick={() => removeTimer(timer.id)}
                >
                  X
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimerList;
